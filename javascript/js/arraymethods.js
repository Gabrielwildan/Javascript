let nilai = [
    { nama: "Hertod", ipa: 90, bahasa: 85, matematika: 80 },
    { nama: "Peltod", ipa: 70, bahasa: 95, matematika: 85 },
    { nama: "Jeltod", ipa: 90, bahasa: 60, matematika: 90 },
    { nama: "Daptod", ipa: 80, bahasa: 75, matematika: 90 },
];

let nama = ["Hertod", "Peltod", "Jeltod", "Daptod"];

// nama.push("Jaktod", "Rentod") //ADD Akhir
// nama.unshift("Fantod", "Rintod") //ADD Awal

// console.log(nama.pop()) //Extract Akhir
// console.log(nama.shift()) //Extract Awal

let mapel = ["Ipa", "Bahasa", "Matematika"];
// console.log(nama.concat(mapel));

// console.log(nama.slice(0, 3))
// console.log(nama.splice(0, 1));

// console.log(nilai[0].nama);
// console.log(nama);

// nama.forEach(function (a) {
//     console.log(a);
// });

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// });

// nilai.filter((a) => (a.ipa > 80 && a.matematika > 80 ? console.log(a) : null)); 

// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map((a) => [a.nama, a.ipa]);

// console.log(siswa);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0);

let hasil = nilai.reduce((a, b) => (a += b.bahasa), 0);

console.log(hasil);