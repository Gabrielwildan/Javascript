if (true) {
    console.log("Run if true");
} else {
    console.log("Run if false");
}

console.log("  ");

let nilai = 80;
let kkm = 78;
let lulus = "Lulus";
let gaklulus = "Tidak Lulus";
let upperlimit = 100;
let underlimit = 0;
let warning = "Nilai Tidak Manuk Akal";


if (nilai <= upperlimit && nilai >= underlimit) {
    if (nilai >= kkm) {
        console.log(lulus);
    } else {
        console.log(gaklulus);
    }
} else {
    console.log(warning);
}