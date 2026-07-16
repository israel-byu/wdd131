const ano = document.querySelector("#anoatual");

ano.textContent = new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
`Última modificação: ${document.lastModified}`;