$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) {
        e.preventDefault();
        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val();
        $("#pelanggan").val();
        $("#alamat").val();
        $("#telp").val();

    });

    $("#btn-add").click(function (e) {
        e.preventDefault();

        $("#title").html("<p>Add Data</p>");

        $("#id").val();
        $("#pelanggan").val();
        $("#alamat").val();
        $("#telp").val();

    });

    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("Are You Sure You Want To Delete This Data?")) {
            deleteData(id);
        }

    });

    $("tbody").on("click", ".btn-update", function () {
        let id = $(this).attr("data-id");
        $("#title").html("<p>Update Data</p>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan: id
        }

        $.ajax({
            type: "post",
            url: "php/selectupdate.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response)

                console.log(data.idpelanggan);
                console.log(data.pelanggan);
                console.log(data.alamat);
                console.log(data.telp);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);
            }
        });
    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache: false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let no = 1;
                $.each(response, function (key, val) {
                    out += `<tr>
                    <td>${no++}</td>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan}>Delete</button></td>
                    <td><button type="button" class="btn btn-warning btn-update" data-id=${val.idpelanggan}>Update</button></td>
                    </tr>`;
                });

                $("#isidata").html(out);
            }
        });
    }
    function insertData() {
        let dataPelanggan = {
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp
        }

        $.ajax({
            type: "post",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }
    function deleteData(id) {
        let idpelanggan = {
            idpelanggan: id
        }

        $.ajax({
            type: "post",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });
    }
    function updateData() {
        let dataPelanggan = {
            idpelanggan: id,
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp
        }

        $.ajax({
            type: "post",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    selectData();
});