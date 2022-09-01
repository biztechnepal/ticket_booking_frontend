import CryptoJS from 'crypto-js'
const HASH_KEY = '6il7YCRSqI%5@Uj1Xk09@s@l6cY3vJkS01' //Secret
var key = CryptoJS.SHA256(HASH_KEY) //hashing the key using SHA256
var iv = CryptoJS.enc.Base64.parse('') //giving empty initialization vector

export const encryptData = data => {
  var Key = CryptoJS.enc.Utf8.parse(HASH_KEY)
  var IV = CryptoJS.enc.Utf8.parse('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz')
  var encryptedText = CryptoJS.AES.encrypt(data, Key, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encryptedText.toString(CryptoJS.format.Base64)
}

// bytes = CryptoJS.AES.decrypt(name.toString(), 'secret key 123@1234').toString(CryptoJS.enc.Utf8);
export const decryptData = (encryptedData, key) => {
  var Key = CryptoJS.enc.Utf8.parse(HASH_KEY)
  var IV = CryptoJS.enc.Utf8.parse('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz')
  var decryptedText = CryptoJS.AES.decrypt(encryptedData, Key, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return decryptedText.toString(CryptoJS.enc.Utf8)
}

export const e_level2 = data => {
  let encryptedString = ''
  if (typeof data == 'string') {
    data = data.slice()
    encryptedString = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
  } else {
    encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
  }
  return encryptedString.toString().replace('+', 'xPlUsR').replace('/', 'SlAs21Ld').replace('=', 'EMl32L')
}
// EREDsTrrmx/m1 x/grcapA== (space include are special character)
// EREDsTrrmx/m1xPlUsRx/grcapA== (replaced by some unique word)
export const d_level1 = encrypted => {
  var decrypted = CryptoJS.AES.decrypt(encrypted.replace('xPlUsR', '+').replace('SlAs21Ld', '/').replace('EMl32L', '='), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}
