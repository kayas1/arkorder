const images=[
    "loading-screen/Loading6.png",
    "loading-screen/Loading7.png",
    "loading-screen/Loading8.png",
    "loading-screen/Loading9.png",
    "loading-screen/Loading10.png",
    "loading-screen/Loading11.png",
    "loading-screen/Loading12.png",
]
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);