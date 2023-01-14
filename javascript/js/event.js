function show(b) {
    a = document.querySelector("p").innerText = "Event JS " + b;

    console.log("Event JS");
}

title.onclick = function () {
    console.log("Event JS with ID");
    document.querySelector(".isi").innerHTML = "Event JS with ID";
}