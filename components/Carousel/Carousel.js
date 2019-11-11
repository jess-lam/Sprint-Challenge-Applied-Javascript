/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];


const carouselContainer = document.querySelector('.carousel-container');
images.forEach(e => {
  carouselContainer.appendChild(carouselCreator(e));
});

const carouselCreator = (image) => {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  mountains.src = images[0];
  computer.src = images[1];
  trees.src = images[2];
  turntable.src = images[3];
  leftBtn.textContent = '\u25bc';
  rightBtn.textContent = '\u25bc';

  carousel.appendChild(leftBtn);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightBtn);

  return carousel;
  console.log('carousel here!')
}

