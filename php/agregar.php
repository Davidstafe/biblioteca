<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $conexion = new mysqli("localhost", "root", "", "biblioteca");

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    $titulo = $_POST["titulo"] ?? "";
    $autor = $_POST["autor"] ?? "";

    if (!empty($titulo) && !empty($autor)) {
        $stmt = $conexion->prepare("INSERT INTO libros (titulo, autor) VALUES (?, ?)");
        $stmt->bind_param("ss", $titulo, $autor);
        $stmt->execute();
        $stmt->close();
    }

    $conexion->close();
} else {
    http_response_code(405);
    echo "Método no permitido";
}
?>
