const nickname = document.querySelector(".nickname");
const username = localStorage.getItem("username");

nickname.innerText=username;

const images=[
    "background/AmuparkDay.png",
    "background/AmuparkDusk.png",
    "background/AmuparkNight.png",
    "background/ChristmasDay.png",
    "background/ChristmasDusk.png",
    "background/ChristmasNight.png",
    "background/CoffeeHouseDay.png",
    "background/CoffeeHouseNight.png",
    "background/Dusk.png",
    "background/EveningDressRoomDay.png",
    "background/EveningDressRoomNight.png",
    "background/FairytaleBg.png",
    "background/HalloweenDay.png",
    "background/HalloweenDusk.png",
    "background/HalloweenNight.png",
    "background/ShoppingRoomDay.png",
    "background/ShoppingRoomDusk.png",
    "background/ShoppingRoomNight.png",
    "background/SleepDay.png",
    "background/SleepDusk.png",
    "background/SleepNight.png",
    "background/TanabataNight.png"
]
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;
bgImage.classList.add("loading-mainScreen_animation");
bgImage.classList.add("background_img");
document.body.appendChild(bgImage);
