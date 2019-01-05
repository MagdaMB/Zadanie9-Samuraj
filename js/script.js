const slideLIst = [{
        img: "images/img1.jpg",
        text: "Pierwszy tekst"
    },
    {
        img: "images/img2.jpg",
        text: "Drugi tekst"
    },
    {
        img: "images/img3.jpg",
        text: "Trzeci tekst"
    }
];

const time = 2000;
let active = 0;

const image = document.querySelector('img');
const txtH1 = document.querySelector("h1");
const dots = [...document.querySelectorAll("span")];

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active")); //zwraca true

    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
const changeSlide = () => {
    active++;

    if (active === slideLIst.length) {
        active = 0;
    }
    image.src = slideLIst[active].img;
    txtH1.textContent = slideLIst[active].text;
    changeDot();
}

setInterval(changeSlide, time);