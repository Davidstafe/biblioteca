

const container = document.getElementById("librosContainer");

// Mostrar todos los libros
libros.forEach(libro => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${libro.titulo}</strong><br><em>${libro.autor}</em>`;
    container.appendChild(card);
});

// Función para buscar
function buscarLibro() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultado = document.getElementById("resultadoBusqueda");

    const encontrado = libros.find(libro =>
        libro.titulo.toLowerCase().includes(input) ||
        libro.autor.toLowerCase().includes(input)
    );

    if (input === "") {
        resultado.textContent = "Por favor, ingresá algo para buscar.";
    } else if (encontrado) {
        resultado.textContent = `✔️ Sí, tenés "${encontrado.titulo}" de ${encontrado.autor}.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ No encontré ese libro en tu biblioteca.";
        resultado.style.color = "red";
    }
}
