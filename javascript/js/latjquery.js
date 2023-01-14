// $(document).ready(function () {
//     console.log("ready!");
// });

// $(function () {
//     console.log("ready!");
// });

// $(function () {
//     console.log("SHAP");
// })

$(function () {
    $("#isi").html("<h1>JQUERY</h1>");

    $("#klik").click(function (e) {
        e.preventDefault();
        alert("jquery alert");
    });

    $("#isi").mouseleave(function () {
        alert("OH YEEAAAHHH DADDY");
    });
})
