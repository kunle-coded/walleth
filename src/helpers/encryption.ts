async function encryptData(
  privateKey: string,
  password: string
): Promise<{
  encrypted: ArrayBuffer;
  iv: Uint8Array;
  salt: Uint8Array;
}> {
  const encoder = new TextEncoder();
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );

  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
      tagLength: 128,
    },
    key,
    encoder.encode(privateKey)
  );

  // const privateKeyHash = await window.crypto.subtle.digest(
  //   "SHA-256",
  //   encoder.encode(privateKey)
  // );

  return { encrypted, iv, salt };
}

async function decryptData(
  iv: Uint8Array,
  salt: Uint8Array,
  password: string,
  encrypted: ArrayBuffer
): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  // const decoder = new TextDecoder();

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );

  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
      tagLength: 128,
    },
    key,
    encrypted
  );

  // const decryptedPrivateKey = decoder.decode(decrypted);
  // const decryptedPrivateKeyHash = await window.crypto.subtle.digest(
  //   "SHA-256",
  //   encoder.encode(decryptedPrivateKey)
  // );

  return decrypted;
}

export { encryptData, decryptData };
