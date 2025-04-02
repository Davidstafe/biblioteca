<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "biblioteca";  // Asegúrate de que esta es tu base de datos

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
