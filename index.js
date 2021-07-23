const button = document.querySelector(".button");
button.addEventListener("click", function(){
    const modal = document.getElementById("modal1");
    modal.style.display = 'block'
});

const fechar = document.querySelector(".botao-fechar");
fechar.addEventListener("click", function(){
    const modal = document.getElementById("modal1");
    modal.style.display = "none"
})

const fecharModal = document.querySelector(".modal-container");
fecharModal.addEventListener("click", function(){
    const modal = document.getElementById("modal1");
    modal.style.display = "none"
})