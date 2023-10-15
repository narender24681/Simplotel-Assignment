const image = document.getElementById("banner-img");
const textOverlay = document.getElementById("lorem-ipsum");

function setTextPosition() {
    const imageWidth = image.width;
    const imageHeight = image.height;

    //   console.log(innerHeight, innerWidth)

    textOverlay.style.left = `${imageWidth * 0.05}px`;
    textOverlay.style.top = `${imageHeight / 4}px`;

    if (imageWidth < 850) {
        textOverlay.style.top = `${imageHeight / 5}px`;
    }

    if (imageWidth < 500) {
        textOverlay.style.top = `${imageHeight / 6}px`;
    }

    if (imageWidth < 400) {
        textOverlay.style.left = `${imageWidth * 0.04}px`;
        textOverlay.style.top = `${imageHeight / 8}px`;
    }
}

image.onload = setTextPosition;

window.addEventListener("resize", setTextPosition);

setTextPosition();