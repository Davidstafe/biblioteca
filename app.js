const container = document.getElementById("librosContainer");

// Ordenar alfabéticamente por autor (antes de mostrar)
libros.sort((a, b) => a.autor.toLowerCase().localeCompare(b.autor.toLowerCase()));

// Mostrar todos los libros
libros.forEach(libro => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${libro.titulo}</strong><br><em>${libro.autor}</em>`;
    container.appendChild(card);
});

// Función para buscar
function buscarLibro() {
    const input = document.getElementById("searchInput");
    const resultado = document.getElementById("resultadoBusqueda");
    const valor = input.value.toLowerCase();

    const encontrado = libros.find(libro =>
        libro.titulo.toLowerCase().includes(valor) ||
        libro.autor.toLowerCase().includes(valor)
    );

    if (valor === "") {
        resultado.textContent = "Por favor, ingresá algo para buscar.";
        resultado.style.color = "black";
    } else if (encontrado) {
        resultado.textContent = `✔️ Sí, tenés "${encontrado.titulo}" de ${encontrado.autor}.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ No encontré ese libro en tu biblioteca.";
        resultado.style.color = "red";
    }

    // Limpiar el input después de buscar
    input.value = "";
}

// Hacer que también funcione con Enter
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscarLibro();
    }
});
