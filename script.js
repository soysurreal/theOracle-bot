// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/0.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/1.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/2.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/3.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/4.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/5.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/0.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/7.png",
  "https://en.gallery-kaikaikiki.com/wp-content/uploads/2022/03/8.png",
];

const titulos = [
  "El loco",
  "El mago",
  "La suma sacerdotisa",
  "La emperatriz",
  "El emperador",
  "Hierofante",
  "Los amantes",
  "El carro",
  "La justicia",
];

const frases = [
  "Ten el coraje suficiente para confiar en ti misma.",
  "Tienes todas las herramientas para manejar la realidad a tu antojo.",
  "Confía en la sabiduría de tu voz interna.",
  "Traes abundancia a tu vida y todo lo que te rodea.",
  "Protege tus límites y deja ir lo que está fuera de tu control.",
  "Encuentra un espacio seguro donde las personas te acepten tal como eres.",
  "El amor se revela todos los días mediante la cotidianidad.",
  "Sabes cuando ejercer determinación y cuando dejar ir.",
  "Eres responsable de tus propias acciones.",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();