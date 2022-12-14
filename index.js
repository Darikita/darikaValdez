const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const panelAside = document.querySelector(".aside-oculto");
const iconoCruzNav = document.querySelector(".cerrar-modal-nav");
const tarjetaProyectosPersonales = document.getElementById(
  "proyectos-personales"
);
const modalProyectosPersonales = document.querySelector(
  ".modal-proyectos-personales"
);

const iconoSol = document.querySelector(".fa-sun");
const iconoLuna = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const botonCerrarProyectosPersonales = document.querySelector(
  "#cerrar-proyectos-personales"
);

iconoHamburguesa.onclick = () => {
  panelAside.classList.remove("aside-oculto");
};

iconoCruzNav.onclick = () => {
  panelAside.classList.add("aside-oculto");
};



/* Una constante que se utiliza para configurar el carrusel. */
const config = {
  autoload: true,
  itemsToBeVisible: 4,
  speed: 6000
};

/*-------------------
  Entry point 
  ---------------------*/
function start() {
  window.onload = function () {
    setSlidersStyle(config);

    const prevSlideButton = document.getElementById("prev-slide");
    const nextSlideButton = document.getElementById("next-slide");

    prevSlideButton.addEventListener("click", () => {
      navigate("backward", config);
    });

    nextSlideButton.addEventListener("click", () => {
      navigate("forward", config);
    });

    if (config.autoload) {
      playCarousel(nextSlideButton, config);
    }
  };
}

/*--------------------------------------------------------------
    Sets the style of slides based on the number of visible items.
  ---------------------------------------------------------------*/
function setSlidersStyle(config) {
  document.querySelector(
    "style"
  ).textContent += `@media screen and (min-width:1180px) { .carousel__slide{ min-width: ${
    100 / config.itemsToBeVisible
  }% } }`;
}

/*----------------------------------------
   Performs the sliding behavior of items.
  ----------------------------------------*/
function navigate(position, config) {
  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = carouselEl.querySelector(".carousel__container");
  const slideEl = carouselEl.querySelector(".carousel__slide");
  let slideWidth = slideEl.offsetWidth;
  slideContainerEl.scrollLeft = this.getNewScrollPosition(
    position,
    slideContainerEl,
    slideWidth,
    config
  );
}

/*-------------------------------
   Get the new scroll position.
  ---------------------------------*/
function getNewScrollPosition(position, slideContainerEl, slideWidth, config) {
  const maxScrollLeft =
    slideContainerEl.scrollWidth - slideWidth * config.itemsToBeVisible;
  if (position === "forward") {
    const x = slideContainerEl.scrollLeft + slideWidth;
    return x <= maxScrollLeft ? x : 0;
  } else {
    const x = slideContainerEl.scrollLeft - slideWidth;
    return x >= 0 ? x : maxScrollLeft;
  }
}

/*-------------------------------
  Autoplay
  ---------------------------------*/
/**
 * It clicks the next button every X milliseconds
 * @param nextButton - The button that will be clicked to move to the next slide.
 * @param config - an object with the following properties:
 */
/**
 * Hace clic en el siguiente bot??n cada X milisegundos
 * @param nextButton - El bot??n en el que se har?? clic para pasar a la siguiente diapositiva.
 * @param config - un objeto con las siguientes propiedades:
 */
function playCarousel(nextButton, config) {
  const play = () => {
    nextButton.click();
    setTimeout(play, config.speed);
  };
  play();
}

start();