<?php
include 'conexion.php';

$sql = "SELECT id, titulo, autor FROM libros ORDER BY id DESC";
$result = $conn->query($sql);

$libros = array();
while ($row = $result->fetch_assoc()) {
    $libros[] = $row;
}

echo json_encode($libros);
$conn->close();
?>
