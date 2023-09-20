import CryptoJS from "crypto-js";
const CRYPTO_KEY = process.env.REACT_APP_CRYPTO_KEY as string;

export const encrypt = (plaintext: string) => {
  return CryptoJS.AES.encrypt(plaintext, CRYPTO_KEY).toString();
};

export const decrypt = (plaintext: string) => {
  return CryptoJS.AES.decrypt(plaintext, CRYPTO_KEY).toString(
    CryptoJS.enc.Utf8
  );
};
