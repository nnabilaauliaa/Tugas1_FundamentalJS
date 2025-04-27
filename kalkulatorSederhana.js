function tambah(a, b) {
    return a + b;
  }
  
function kurang(a, b) {
    return a - b;
  }
  
function kali(a, b) {
    return a * b;
  }
  
function bagi(a, b) {
    if (b === 0) {
      return "Tidak bisa dibagi dengan 0!";
    }
    return a / b;
  }
  
const prompt = require('prompt-sync')();
  
console.log("=== Kalkulator Sederhana ===");
console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
  

const pilihan = prompt("Operasi: ");
const angka1 = parseFloat(prompt("Angka 1: "));
const angka2 = parseFloat(prompt("Angka 2: "));
  
// Variabel hasil
let hasil;
  
// Pilih operasi berdasarkan input
switch (true) {
    case (pilihan === 'Penjumlahan' || pilihan === '1'):
      hasil = tambah(angka1, angka2);
      break;
    case (pilihan === 'Pengurangan' || pilihan === '2'):
      hasil = kurang(angka1, angka2);
      break;
    case (pilihan === 'Perkalian' || pilihan === '3'):
      hasil = kali(angka1, angka2);
      break;
    case (pilihan === 'Pembagian' || pilihan === '4'):
      hasil = bagi(angka1, angka2);
      break;
    default:
      console.log("Pilihan tidak valid!");
      hasil = null;
}
  
// Tampilkan hasil
if (hasil !== null) {
    console.log(`Hasil: ${hasil}`);
}
  