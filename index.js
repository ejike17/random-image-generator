const btnEl = document.querySelector(".btn")
const imageContainerEl = document.querySelector(".image-container")

btnEl.addEventListener('click', addNewImages)

function addNewImages() {
    for (let i = 0; i < 3; i++) {
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImg)
    }
}