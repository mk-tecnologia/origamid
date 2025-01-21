export default function initFaqAccordion() {
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