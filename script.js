async function cargarEntradas() {
  const respuesta = await fetch("posts.json");
  const entradas = await respuesta.json();
  const contenedor = document.getElementById("blog");
  const campoBusqueda = document.getElementById("search");

  function mostrarEntradas(filtro = "") {
    contenedor.innerHTML = "";
    entradas
      .filter(post => post.title.toLowerCase().includes(filtro.toLowerCase()))
      .forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
          <h2>${post.title}</h2>
          <p><em>${post.date}</em></p>
          <img src="${post.image}" alt="${post.title}" />
          <p>${post.content}</p>
        `;
        contenedor.appendChild(div);
      });
  }

  campoBusqueda.addEventListener("input", () => {
    mostrarEntradas(campoBusqueda.value);
  });

  mostrarEntradas();
}

cargarEntradas();