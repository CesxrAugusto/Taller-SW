interface Pelicula {

    titulo: string;
    imagen: string;
    director: string;
    calificacion: string;
    duracion: string;
    anio: number;
    idiomas: string;
    trailer: string;

}

fetch("data.json").then(response => response.json()).then((pelicula: Pelicula) => {

    document.getElementById("titulo")!.innerHTML =
        pelicula.titulo;

    const imagen = document.getElementById("imagen") as HTMLImageElement;

    imagen.src = pelicula.imagen;


    document.getElementById("caracteristicas")!.innerHTML =

    `
    - Director: ${pelicula.director} <br>
    - Calificación IMDB: ${pelicula.calificacion} <br>
    - Duración: ${pelicula.duracion} <br>
    - Año: ${pelicula.anio} <br>
    - Idioma(s): ${pelicula.idiomas}
    `;


    const video = document.getElementById("trailer") as HTMLVideoElement;

    const source = document.createElement("source");

    source.src = pelicula.trailer;
    source.type = "video/mp4";

    video.appendChild(source);

});