const whole = document.querySelector(".whole"),
    wro = document.querySelector(".wro"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 0,
    intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 2000)
};

autoSlide();

const slideImage = () => { 
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    wro.style.transform = `translate(-${imageIndex * 100}%)`
};

const updateClick = (e) => {
        clearInterval(intervalId);
        imageIndex += e.target.id === "next" ? 1 : -1;
        slideImage(imageIndex);
        autoSlide();
}

buttons.forEach((button) => button.addEventListener("click", updateClick));

whole.addEventListener("mouseover", () => clearInterval(intervalId));
whole.addEventListener("mouseleave", autoSlide);