const images = ["https://i.imgur.com/XhESTPj.jpg", "https://i.imgur.com/NoRv3Ml.jpg", "https://i.imgur.com/1hRAAmr.jpg", "https://i.imgur.com/lDgJL1i.jpg"];
//I think it's: sloth astronaut, bread, explosion, Amazon rainforest.
//Changed the const and values into image urls.

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgImage = document.getElementById("bg-image");
// bg-image a new id I added

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  bgImage.src = images[randomNumber];
  color.textContent = `Image ${randomNumber + 1}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}

// document.getElementById("testing").src = "https://i.imgur.com/XhESTPj.jpg";