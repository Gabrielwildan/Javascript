<?php

require_once "koneksi.php";


$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];

if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {

    $sql = "INSERT INTO tblpelangggan VALUES('','$pelanggan','$alamat','$telp')";

    if ($result = mysqli_query($con, $sql)) {
        echo "Your Data Has Been Saved";
    } else {
        echo "Failed ";
    }
} else {
    echo "Empty";
}
