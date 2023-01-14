<?php

require_once "koneksi.php";


$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$idpelanggan = $idpelanggan['idpelanggan'];

if (!empty($idpelanggan)) {

    $sql = "DELETE FROM tblpelangggan WHERE idpelanggan=$idpelanggan";

    if ($result = mysqli_query($con, $sql)) {
        echo "Your Data Has Been Deleted";
    } else {
        echo "Failed ";
    }
} else {
    echo "Empty";
}
