const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

button.addEventListener("click", function(){
    loadImage()
})

async function loadImage() {
    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await response.json();
    console.log(images)
    selectRandomImage(images)
}

function selectRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex)
    const randomImage = images[randomIndex]
    console.log(randomImage)
    displayImage(randomImage)
}

function displayImage(randomImage) {
    const author = randomImage.author
    const imageAddress = randomImage.download_url
    authorSpan.innerText = author
    img.src = imageAddress
    imgDiv.classList.remove("hide")

}

