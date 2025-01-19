// INICIO => TABMENU
//SELECIONANDO TODOS OS "LI" DO ELEMENTO
const tabmenu = document.querySelectorAll(".js-tabmenu li");
//SELECIONANDO TODOS OS "SECTION" DO ELEMENTO
const tabdesc = document.querySelectorAll(".js-tabdesc section");
// console.log(tabmenu, tabdesc);

//VERIFICA SE OS ELEMENTOS EXISTEM E ADD ATIVO NO PRIMEIRO ITEM
if ((tabmenu.length) && (tabdesc.length)) {
    tabdesc[0].classList.add("ativo");
}

// FUNCTION ADD E REMOVE CLASSE ATIVO DOS ELEMENTOS
function activeTab(index) {
    //REMOVE CLASSE ATIVO
    tabdesc.forEach((section) => {
        section.classList.remove("ativo");
    });
    //ADD CLASSE ATIVO
    tabdesc[index].classList.add("ativo");
}

//AO CLICAR NA IMAGEM ADD INDICE A FUNC ACTIVETAB
tabmenu.forEach((itemmenu, index) => {
    itemmenu.addEventListener("click", () => {
        activeTab(index);
    });
});