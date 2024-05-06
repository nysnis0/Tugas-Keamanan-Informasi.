function encrypt() {
  var key = document.getElementById('key').value;
  var plaintext = document.getElementById('plaintext').value;
  
  var encryptedText = CryptoJS.AES.encrypt(plaintext, key).toString();
  document.getElementById('hasil').value = encryptedText;
}

function decrypt() {
  var key = document.getElementById('key').value;
  var ciphertext = document.getElementById('plaintext').value;

  var decryptedText = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
  document.getElementById('hasil').value = decryptedText;
}

function resetForm() {
  var key = document.getElementById('key').value;
  var plaintext = document.getElementById('plaintext').value;

  document.getElementById('key').value = '';
  document.getElementById('plaintext').value = '';
  document.getElementById('hasil').value = '';
}
