'use strict'

const themeSwitcher = document.getElementById('themeBtn')
const languageSwitcher = document.getElementById('languageBtn')

languageSwitcher.addEventListener('click', function(){
    var elements = document.querySelectorAll('.lang')
    if(this.textContent === 'PORTUGUESE'){
        this.textContent = 'INGLÊS'
        for(var i = 0; i < elements.length; i++){
            elements[i].innerHTML = elements[i].getAttribute('data-pt');
        }
    } else{
        this.textContent = 'PORTUGUESE'
        for(var i = 0; i < elements.length; i++){
            elements[i].innerHTML = elements[i].getAttribute('data-en');
        }
    }
});

themeSwitcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme') 
    let classes = document.body.classList; 
    var isDarkTheme = classes.contains("dark-theme");

    if(isDarkTheme){
        this.textContent = "Light theme/Tema claro";
    } else {
        this.textContent = "Dark theme/Tema escuro";
    }
    // console.log("current class name: " + classes);
});





