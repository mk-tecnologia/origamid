export default function initScrollAnimado() {
    //SELECIONA OS ELEMENTOS
    const sections = document.querySelectorAll(".js-scroll");
    if (sections.length) {
        //PEGAR MEDIDA DA TELA
        const windowSize = window.innerHeight * 0.6;

        function scrollAnimado() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const startScrollAnimado = (sectionTop - windowSize) < 0;
                if (startScrollAnimado)
                    section.classList.add("ativo");
                else
                    section.classList.remove("ativo");
            })
        }

        scrollAnimado()
        window.addEventListener("scroll", scrollAnimado);
    }
}