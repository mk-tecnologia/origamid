export default function initTabNav() {
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