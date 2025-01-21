export default function initScrollSuave() {
    //SELECIONA OS ELEMENTOS
    const linkInterno = document.querySelectorAll(".js-menu a[href^='#']");

    function scrollToSection(event) {
        //DESATIVA A FUNCAO DEFAULT DO ELEMENTO
        event.preventDefault();
        //SELECIONA O ATRIBUTO HREF
        const href = event.currentTarget.getAttribute("href");
        //SELECIONA A SECTION COM O ATRIBUOT HREF
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        //FORMA ALTERNATIVA DE SCROLL
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth",
        // });
    }

    //EXECUTA FUNCAO AO CLICAR
    linkInterno.forEach(link => {
        link.addEventListener("click", scrollToSection)
    })
}
