// =====================================
// Rodapé
// =====================================

// Ano atual
const anoAtual = document.querySelector("#anoatual");
anoAtual.textContent = new Date().getFullYear();

// Data da última modificação
const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;


// =====================================
// Menu Hambúrguer
// =====================================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});


// =====================================
// Fechar menu ao clicar em um link
// =====================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 768) {

            navigation.classList.remove("open");
            menuButton.textContent = "☰";

        }

    });

});