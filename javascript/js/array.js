let coba = function () {
    return "coba function";
};

let fruit = ['apple', 'manggo', 'grape', 69, coba(),
    test = () => "arrow function output",
    function name() {
        return "aMbAtUkAm OoOOOoooHHHH";
    }
];
console.log(fruit);
console.log(fruit[0]);

console.log("  ");

for (let i in fruit) {
    console.log(fruit[i]);
}

console.log("  ");

console.log(fruit[5]());
console.log(fruit[6]());

