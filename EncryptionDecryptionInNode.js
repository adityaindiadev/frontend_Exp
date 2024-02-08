import CryptoJS from 'crypto-js';

const EncryptDecryptExample = () => {
  const originalText = 'Hello, World!';
  const secretKey = 'ThisIsASecretKey';
  // Encryption function
  const encryptData = () => {
    const encryptedText = CryptoJS.AES.encrypt(originalText, secretKey).toString();
    console.log('Encrypted Text:', encryptedText);
  };
  // Decryption function
  const decryptData = () => {
    const encryptedText = 'U2FsdGVkX19XuwtNmJbIsKtGt7rVddTn32U0Q4g0y7k=';
    const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
    console.log('Decrypted Text:', decryptedText);
  };
  
};
export default EncryptDecryptExample;