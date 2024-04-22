


// document.addEventListener('DOMContentLoaded', function() {
//     const messageBox = document.querySelector('.message-box');
//     const spans = messageBox.querySelectorAll('span');
//     let index = 0;

//     function showNextSpan() {
//         if (index < spans.length) {
//             spans[index].classList.add('show');
//             index++;
//             setTimeout(showNextSpan, 200); // Cambia el valor de 200 para ajustar la velocidad de aparición de los caracteres
//         }
//     }

//     // Limpiar el contenido de message-box al cargar la página
//     messageBox.innerHTML = '';

//     showNextSpan();
// });

// Ocultar todos los span al cargar la página

const paragraphIds = [
  'first-paragraph',
  'second-paragraph',
  'third-paragraph',
  'fourth-paragraph',
  'fifth-paragraph',
  'sixth-paragraph',
  'seventh-paragraph',
  'eighth-paragraph',
  'ninth-paragraph',
  'tenth-paragraph',
];
let currentIndex = 0;

function showNextElement() {
  const paragraphId = paragraphIds[currentIndex];
  const paragraph = document.getElementById(paragraphId);
  const spans = paragraph.querySelectorAll('span');

  let delay = 0;
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.display = 'inline';
    }, delay);
    delay += 140; // Ajusta el valor del retraso aquí (en milisegundos)
  });

  delay += 0; // Ajusta el tiempo para el siguiente párrafo
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < paragraphIds.length) {
      showNextElement();
    }
  }, delay);
}

showNextElement();

