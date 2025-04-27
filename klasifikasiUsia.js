const daftarUsia = [5, 65, 25, 15, -1];

const kategoriCount = {
    "Belum Lahir": 0,
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia": 0
};

function getKategoriUsia(usia) {
    let kategori = "";
    switch (true) {

        case (usia >= 60):
            kategori = "Lansia";
            break;

        case (usia >= 18):
            kategori = "Dewasa";
            break;

        case (usia >= 13):
            kategori = "Remaja";
            break;

        case (usia >= 0):
            kategori = "Anak-anak";
            break;
        
        default:
            kategori = "Belum Lahir";
            break;
    }
    return kategori;
}

for (let i = 0; i < daftarUsia.length; i++) {
  const kategori = getKategoriUsia(daftarUsia[i]);
  if (kategoriCount.hasOwnProperty(kategori)) {
    kategoriCount[kategori]++;
  }
}

console.log(`Belum Lahir: ${kategoriCount["Belum Lahir"]} orang`);
console.log(`Anak-anak: ${kategoriCount["Anak-anak"]} orang`);
console.log(`Remaja: ${kategoriCount["Remaja"]} orang`);
console.log(`Dewasa: ${kategoriCount["Dewasa"]} orang`);
console.log(`Lansia: ${kategoriCount["Lansia"]} orang`);
