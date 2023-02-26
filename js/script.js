{
    const welcome = () => {
        console.log("Witaj ciekawski");
    }
    
    const buttonParagraph = document.querySelector(".js-buttonParagraph");

    const toggleParagraphBackground = () => {
        const paragraphs = document.querySelectorAll(".main__paragraph");
        paragraphs.forEach((paragraph) => {
            paragraph.classList.toggle("main__paragraph--specialMode")
        });

        paragraphs.forEach((paragraph) => {
            paragraph.classList.contains("main__paragraph--specialMode") ?
                buttonParagraph.innerText = "Ciemny paragraf" :
                buttonParagraph.innerText = "Jasny paragraf"
        })
    };

    const toggleHeader = () => {
        const header = document.querySelector(".header");
        header.classList.toggle("header--specialMode");

        header.classList.contains("header--specialMode") ?
            header.innerText = "Czy jesteś gotowy na niezapomnianą podróż?" :
            header.innerText = "Valmeinier - alpejskie szaleństwo"
    };

    const init = () => {
        welcome();
        const buttonTitle = document.querySelector(".js-buttonTitle");

        buttonParagraph.addEventListener("click", toggleParagraphBackground);
        buttonTitle.addEventListener("click", toggleHeader);
    }

    init();
}