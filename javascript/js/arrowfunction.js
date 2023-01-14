let fungsi = function (name) {
    console.log("Learning With " + name)
}
fungsi("Yanto");

let ex = (nama) => {
    console.log("Learning With " + nama)
}
ex("Yanto V2")

console.log("-----------------------------------");

let tambah = function (a, b) {
    return a + b;
}
console.log(tambah(6, 5));

let plus = (a, b) => a + b;
console.log(plus(6, 5));

console.log("-----------------------------------");

let hasil = (a) => a * 5;
console.log(hasil(5));

console.log("-----------------------------------");

let nt = () => console.log("NICE TRY");
nt();

console.log("-----------------------------------");

let bljr = () => {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("etc..");
};
bljr();

console.log("-----------------------------------");

let nilai = 10;
let test = nilai < 10 ? () => (pred = "fail") : () => (pred = "success");
console.log(test());
