const whole = document.querySelector(".whole"),
    zoo = document.querySelector(".zoo"),
    images = document.querySelectorALL("img"),
    buttons = document.querySelectorALL(".button");

let imageIndex = 1,
    intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 2000)
};

autoSlide();

const slideImage = () => { 
    imageIndex = imageIndex === images. length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    zoo.style.transform = `translate(-${imageIndex * 100}%)`
};

const updateClick = () => {
        clearInterval(intervalId);
        imageIndex += e.target.id === "next" ? 1 : -1;
        slideImage(imageIndex);
        autoSlide();
}

buttons.forEach((button) => button.addEventListener("click", updateClick));

whole.addEventListener("mouseover", () => clearInterval(intervalId))
whole.addEventListener("mouseleave", autoSlide)