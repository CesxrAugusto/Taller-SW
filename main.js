const pelicula = peliculaData;

document.getElementById("titulo").innerHTML = pelicula.titulo;

const imagen = document.getElementById("imagen");
imagen.src = pelicula.imagen;

document.getElementById("caracteristicas").innerHTML = `
  <p><strong>Características</strong></p>
  <p> - <strong>Director:</strong> ${pelicula.director}</p>
  <p> - <strong>Calificación IMDB:</strong> ${pelicula.calificacion}</p>
  <p> - <strong>Duración:</strong> ${pelicula.duracion}</p>
  <p> - <strong>Año:</strong> ${pelicula.anio}</p>
  <p> - <strong>Idioma(s):</strong> ${pelicula.idiomas}</p>
`;

const video = document.getElementById("trailer");
const source = document.createElement("source");
source.src = pelicula.trailer;
source.type = "video/mp4";
video.appendChild(source);
video.load();