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
}
