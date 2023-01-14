let tblmenu = [
    { idmenu: 1, idkategori: 1, menu: "Ayam Bakar", gambar: "ayambakar.jpg", harga: 15000 },
    { idmenu: 2, idkategori: 1, menu: "Ayam Goreng", gambar: "ayamgoreng.jpg", harga: 15000 },
    { idmenu: 3, idkategori: 2, menu: "Nasi Goreng", gambar: "nasigoreng.jpg", harga: 10000 },
    { idmenu: 4, idkategori: 3, menu: "Bakso", gambar: "bakso.jpg", harga: 8000 },
    { idmenu: 5, idkategori: 4, menu: "Es Jeruk", gambar: "esjeruk.jpg", harga: 5000 },
    { idmenu: 6, idkategori: 4, menu: "Es Teh", gambar: "teh.jpg", harga: 5000 },
]

let tampil = tblmenu.map(function (kolom) {
    return ` <div class="produk-content">
    <div class="image">
        <img src="images/${kolom.gambar}" alt="">
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>Rp.${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
        <button data-idmenu="${kolom.idmenu}">BUY</button>
    </div>
</div>`;
});

let isi = document.querySelector(".produk").innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let i = 0; i < btnbeli.length; i++) {
    btnbeli[i].onclick = function () {
        // console.log(btnbeli[i].dataset["idmenu"]);
        // cart.push(btnbeli[i].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[i].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
}



