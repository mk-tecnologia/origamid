// INICIO => TABMENU
function initTabNav() {
    // SELECIONANDO TODOS OS "LI" DO ELEMENTO
    const tabmenu = document.querySelectorAll(".js-tabmenu li");
    const activeClass = "ativo";
    //SELECIONANDO TODOS OS "SECTION" DO ELEMENTO
    const tabdesc = document.querySelectorAll(".js-tabdesc section");

    //VERIFICA SE OS ELEMENTOS EXISTEM E ADD ATIVO NO PRIMEIRO ITEM
    if ((tabmenu.length) && (tabdesc.length)) {
        tabdesc[0].classList.add(activeClass);

        // FUNCTION ADD E REMOVE CLASSE ATIVO DOS ELEMENTOS
        function activeTab(index) {
            //REMOVE CLASSE ATIVO
            tabdesc.forEach((section) => {
                section.classList.remove(activeClass);
            });
            //ADD CLASSE ATIVO
            tabdesc[index].classList.add(activeClass);
        }

        //AO CLICAR NA IMAGEM ADD INDICE A FUNC ACTIVETAB
        tabmenu.forEach((itemmenu, index) => {
            itemmenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();
//FIM => TABMENU

//INICIO => FAQ ACCORDION
function initFaqAccordion() {
    //SELECIONA O ELEMENTO
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";
    //VERIFICA SE EXISTE O LEMENTO
    if (accordionList.length) {
        //DEIXA O PRIMEIRO ITEM COMO ATIVO
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        //ADD CLASSES AO ELEMENTO
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        //EXECUTA A FUNCAO AO CLICAR
        accordionList.forEach((accordion) => {
            accordion.addEventListener("click", activeAccordion);
        })
    }
}

initFaqAccordion();
//FIM => FAQ ACCORDION

//INICIO => SCROLL SUAVE
function initScrollSuave() {
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

initScrollSuave();
//FIM => SCROLL SUAVE

//INICIO => SCROLL ANIMADO
function initScrollAnimado() {
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

initScrollAnimado();

//FIM => SCROLL ANIMADO