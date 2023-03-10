import { productoServices } from "../servicios/producto-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const precio = document.querySelector("[data-preco]").value;

  productoServices
    .creaProdutos(nombre, url, precio)
    .then((resposta) => {
      window.location.href = "../screens/index.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});
