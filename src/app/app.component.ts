import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encryptor-app';
  inputText: string = '';
  outputText: string = '';
  secretKey: string = '2&p83Jgn$ilVls';
  secretSalt: string = 'aR2$0Gc7UNmqo7R';

  encrypt() {
    const valuesToEncrypt = this.inputText.split(',');
    const encryptedValues = valuesToEncrypt.map(value => this.encryptAES(value));
    this.outputText = encryptedValues.join('\n');
    this.inputText = '';
  }

  decrypt() {
    const valuesToDecrypt = this.outputText.split('\n');
    const decryptedValues = valuesToDecrypt.map(value => this.decryptAES(value));
    this.inputText = decryptedValues.join('\n');
    this.outputText = '';
  }

  encryptAES(value: string): string {
    const key = CryptoJS.PBKDF2(this.secretKey, CryptoJS.enc.Hex.parse(this.secretSalt), {
      keySize: 128 / 32,
      iterations: 1000
    });
    const encrypted = CryptoJS.AES.encrypt(value, key, {
      iv: CryptoJS.enc.Hex.parse('0000000000000000'),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    return encrypted.toString();
  }

  decryptAES(value: string): string {
    const key = CryptoJS.PBKDF2(this.secretKey, CryptoJS.enc.Hex.parse(this.secretSalt), {
      keySize: 128 / 32,
      iterations: 1000
    });
    const decrypted = CryptoJS.AES.decrypt(value, key, {
      iv: CryptoJS.enc.Hex.parse('0000000000000000'),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  copyOutput() {
    navigator.clipboard.writeText(this.outputText).then(() => {
      console.log('Texto copiado al portapapeles');
    });
  }

  pasteInput() {
    navigator.clipboard.readText().then(text => {
      this.inputText = text;
    });
  }
}
