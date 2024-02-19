'use strict' //modo estrito: reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.

const switcher = document.querySelector('.btn') //obter a referencia do botao, com o ponto p selecionar elementos pela classe CSS.

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme') //método toggle para alternar o elemento para a classe dark-theme
    //iterando pela lsita de classes p verificar cada uma delas:
    var classes = document.body.classList; 
    var isDarkTheme = classes.contains("dark-theme");

    if(isDarkTheme){
        this.textContent = "Light theme"; 
    } else {
        this.textContent = "Dark theme";
    }
    console.log("current class name: " + classes);
});


