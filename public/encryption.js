class Encryption {
    // Generate a new RSA key pair for encryption and decryption
    static async generateKeyPair() {
        const keyPair = await window.crypto.subtle.generateKey(
            {
                name: "RSA-OAEP", // Algorithm for key generation and encryption
                modulusLength: 2048, // Length of the modulus in bits (security parameter)
                publicExponent: new Uint8Array([1, 0, 1]), // Standard public exponent (65537)
                hash: "SHA-256", // Hash function for the RSA algorithm
            },
            true, // Key can be exported later
            ["encrypt", "decrypt"] // Allowed key usages
        );
        return keyPair; // Returns an object containing public and private keys
    }

    // Export the public key to a Base64-encoded string for sharing
    static async exportPublicKey(publicKey) {
        const exported = await window.crypto.subtle.exportKey(
            "spki", // Format for exporting the public key
            publicKey
        );
        // Convert the exported key to a Base64-encoded string
        return btoa(String.fromCharCode(...new Uint8Array(exported)));
    }

    // Import a public key from a Base64-encoded string
    static async importPublicKey(publicKeyStr) {
        const binaryString = atob(publicKeyStr); // Decode Base64 string to binary
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i); // Convert binary string to byte array
        }
        return await window.crypto.subtle.importKey(
            "spki", // Format of the imported key
            bytes,
            {
                name: "RSA-OAEP", // Algorithm details
                hash: "SHA-256", // Hash function used
            },
            true, // Key can be used for encryption
            ["encrypt"] // Allowed key usage
        );
    }

    // Encrypt a message using a combination of RSA and AES algorithms
    static async encryptMessage(message, publicKey) {
        // Generate an AES key for encrypting the message
        const aesKey = await window.crypto.subtle.generateKey(
            {
                name: "AES-GCM", // AES in Galois Counter Mode for encryption
                length: 256, // Key length in bits
            },
            true, // Key can be exported later
            ["encrypt", "decrypt"] // Allowed key usages
        );

        // Generate a random initialization vector (IV) for AES encryption
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const encodedMessage = new TextEncoder().encode(message); // Encode message to bytes
        const encryptedMessage = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM", // Encryption algorithm
                iv: iv // Initialization vector
            },
            aesKey, // AES encryption key
            encodedMessage // Message to encrypt
        );

        // Export and encrypt the AES key using RSA
        const exportedAesKey = await window.crypto.subtle.exportKey("raw", aesKey);
        const encryptedKey = await window.crypto.subtle.encrypt(
            {
                name: "RSA-OAEP" // RSA encryption algorithm
            },
            publicKey, // Public key to encrypt the AES key
            exportedAesKey // AES key to be encrypted
        );

        // Return encrypted data as Base64-encoded strings
        return {
            encryptedMessage: btoa(String.fromCharCode(...new Uint8Array(encryptedMessage))), // Encrypted message
            encryptedKey: btoa(String.fromCharCode(...new Uint8Array(encryptedKey))), // Encrypted AES key
            iv: btoa(String.fromCharCode(...iv)) // Initialization vector
        };
    }

    // Decrypt a message using the provided private RSA key
    static async decryptMessage(encryptedData, privateKey) {
        // Decode the Base64-encoded AES key
        const encryptedKeyBytes = Uint8Array.from(atob(encryptedData.encryptedKey), c => c.charCodeAt(0));
        const decryptedKeyBuffer = await window.crypto.subtle.decrypt(
            {
                name: "RSA-OAEP" // RSA decryption algorithm
            },
            privateKey, // Private key for decryption
            encryptedKeyBytes // Encrypted AES key
        );

        // Import the decrypted AES key for message decryption
        const aesKey = await window.crypto.subtle.importKey(
            "raw", // Format of the AES key
            decryptedKeyBuffer, // Decrypted AES key
            {
                name: "AES-GCM", // Algorithm details
                length: 256 // Key length
            },
            true, // Key can be used for decryption
            ["decrypt"] // Allowed key usage
        );

        // Decode the Base64-encoded initialization vector and message
        const iv = Uint8Array.from(atob(encryptedData.iv), c => c.charCodeAt(0));
        const encryptedMessageBytes = Uint8Array.from(atob(encryptedData.encryptedMessage), c => c.charCodeAt(0));
        const decryptedMessage = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM", // AES decryption algorithm
                iv: iv // Initialization vector
            },
            aesKey, // AES decryption key
            encryptedMessageBytes // Encrypted message
        );

        return new TextDecoder().decode(decryptedMessage); // Decode bytes to the original message
    }

    // Generate a digital signature for a message using the private RSA key
    static async sign(message, privateKey) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message); // Encode message to bytes
        const signature = await window.crypto.subtle.sign(
            {
                name: "RSA-PSS", // RSA signing algorithm with Probabilistic Signature Scheme
                saltLength: 32, // Length of the salt in bytes
            },
            privateKey, // Private key for signing
            data // Message to sign
        );
        return btoa(String.fromCharCode(...new Uint8Array(signature))); // Return signature as a Base64-encoded string
    }

    // Verify the digital signature of a message using the public RSA key
    static async verify(message, signature, publicKey) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message); // Encode message to bytes
        const signatureBytes = Uint8Array.from(atob(signature), c => c.charCodeAt(0)); // Decode Base64 signature
        return await window.crypto.subtle.verify(
            {
                name: "RSA-PSS", // RSA signature verification algorithm
                saltLength: 32, // Length of the salt in bytes
            },
            publicKey, // Public key for verification
            signatureBytes, // Digital signature
            data // Original message
        );
    }
}
