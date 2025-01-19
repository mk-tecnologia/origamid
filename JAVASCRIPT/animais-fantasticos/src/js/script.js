// INICIO => TABMENU
function initTabNav() {
    // SELECIONANDO TODOS OS "LI" DO ELEMENTO
    const tabmenu = document.querySelectorAll(".js-tabmenu li");
    const activeClass = "ativo";
    //SELECIONANDO TODOS OS "SECTION" DO ELEMENTO
    const tabdesc = document.querySelectorAll(".js-tabdesc section");
    // console.log(tabmenu, tabdesc);

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
function faqAccordion() {
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

faqAccordion();
//FIM => FAQ ACCORDION