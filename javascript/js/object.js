const object = {
    name: "Yanto GEH",
    telp: 0869696969,
    fruit: ['apple', 'orange', 'grape'],
    coba: function () {
        return "function inside the object";
    },
    Option: true,
    "idk": 69,
};
console.log(object.name);
console.log(object.telp);
console.log(object.Option);
console.log(object.coba());
console.log(object.fruit[1]);
console.log(object["idk"]);