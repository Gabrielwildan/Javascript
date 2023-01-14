function show(b) {
    console.log("show " + b);
}

function cb() {
    a = document.querySelector(".isi").innerHTML = "Eventlistener Learnin"
    console.log("eventlistener");
}

// title.addEventListener("click", cb);

// title.onclick = cb;
// title.onmouseover = cb;

title.onclick = function () {
    console.log("eventlistener inside anonymous function");
}