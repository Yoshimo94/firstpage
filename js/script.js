console.log("Witaj ciekawski");

let buttonParagraph = document.querySelector(".sidepanel__buttonParagraph");
let buttonTitle = document.querySelector(".sidepanel__buttonTitle");
let header = document.querySelector(".header");
let paragraphs = document.querySelectorAll(".main__paragraph");

buttonParagraph.addEventListener("click", () => {
    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle("main__paragraph--specialMode")
    })

    paragraphs.forEach((paragraph) => {
        if (paragraph.classList.contains("main__paragraph--specialMode")) {
            buttonParagraph.innerText = "Ciemny paragraf"
        }
        else {
            buttonParagraph.innerText = "Jasny paragraf"
        }
    })
})

buttonTitle.addEventListener("click", () => {
    header.classList.toggle("header--specialMode")

    header.classList.contains("header--specialMode") ?
        header.innerText = "Czy jesteś gotowy na niezapomnianą podróż?" :
        header.innerText = "Valmeinier - alpejskie szaleństwo"
})