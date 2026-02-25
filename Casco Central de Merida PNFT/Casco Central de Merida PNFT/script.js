const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const slides = [
    {
        image: "images/plaza-bolivar.jpg",
        title: "Plaza Bolívar",
        description: "Principal espacio público del casco central de Mérida, punto de encuentro cultural y social."
    },
    {
        image: "images/catedral.jpg",
        title: "Catedral Metropolitana",
        description: "Monumento religioso de gran valor histórico y arquitectónico, patrimonio nacional."
    },
    {
        image: "images/palacio-gobierno.jpg",
        title: "Palacio de Gobierno",
        description: "Edificación emblemática que alberga espacios históricos y administrativos del estado."
    },
    {
        image: "images/rectorado-ula.jpg",
        title: "Universidad de Los Andes",
        description: "Una de las universidades más antiguas de América Latina y símbolo cultural de Mérida."
    },
    {
        image: "images/heladeria-coromoto.jpg",
        title: "Heladería Coromoto",
        description: "Ícono turístico de Mérida, reconocida por poseer el Récord Guinness por la mayor variedad de sabores de helado."
    }
];

let currentSlide = 0;

function showSlide(index) {
    document.getElementById("slide-image").src = slides[index].image;
    document.getElementById("slide-title").textContent = slides[index].title;
    document.getElementById("slide-description").textContent = slides[index].description;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
