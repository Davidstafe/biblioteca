function cargarLibros() {
    fetch("libros/php/listar.php")
        .then(response => response.json())
        .then(data => {
            let lista = document.getElementById("listaLibros");
            lista.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos libros

            data.forEach((libro, index) => {
                let card = document.createElement("div");
                card.classList.add("card");

                // Estructura de la tarjeta con el número automático
                card.innerHTML = `
                    <div class="left">${index + 1}. ${libro.titulo}</div>
                    <div class="right">${libro.autor}</div>
                `;

                lista.appendChild(card);
            });
        })
        .catch(error => console.log("Error al cargar los libros: ", error));
}
