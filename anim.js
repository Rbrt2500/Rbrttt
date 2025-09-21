// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Started out on a one-way train", time: 12 }, // [00:00:12]
  { text: "Always knew where I was gonna go next", time: 15 }, // [00:00:15]
  { text: "Didn't know until I saw your face", time: 17 }, // [00:00:17]
  { text: "I was missing out on every moment", time: 20 }, // [00:00:20]
  { text: "You'll be one and, baby, I'll be two", time: 22 }, // [00:00:22]
  { text: "Would you mind it if I said I'm into you", time: 25 }, // [00:00:25]
  { text: "So if it's real, then darling let me know", time: 30 }, // [00:00:30]
  { text: "I wouldn't mind if you steal the show", time: 38 }, // [00:00:38] (La letra de "I wouldn't mind" empieza en [00:00:41] y "if you steal the show" en [00:00:45])

  { text: "", time: 48 }, // Pausa más larga antes del siguiente verso

  { text: "You and I, we go together", time: 57 }, // [00:00:57]
  { text: "You're the sky, I'll be the weather", time: 63 }, // [00:01:03]
  { text: "A pretty thing, a sun and rain, oh no", time: 70 }, // [00:01:10]
  { text: "Summer night, perfect occasion", time: 78 }, // [00:01:20]
  { text: "When I'm by, you know I'll be waiting for you", time: 83 }, // [00:01:24]
  { text: "Oh, for you", time: 89 }, // [00:01:27]
  
  { text: "So if it's real, then darling let me know", time: 96 }, // [00:01:29]
  { text: "I wouldn't mind if you steal the show", time: 104 }, // [00:01:40]
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime); // Usamos Math.floor para trabajar con segundos exactos
  var currentLine = null;
  // Buscamos la última línea cuyo tiempo ya haya pasado
  for (var i = lyricsData.length - 1; i >= 0; i--) {
    if (time >= lyricsData[i].time) {
      currentLine = lyricsData[i];
      break;
    }
  }
  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 10);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
