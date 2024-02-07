let bottone = document.getElementById("bottone");
let voce = document.getElementById('input');
let lista = document.getElementsByClassName('form')

function aggiungiVoce() {
  
  
}
bottone.addEventListener("click", ()=> {
    const div = document.createElement('div')
    div.classList.add('todo')
    
    lista.append(div)
    lista.innerText = 'text'.value

});
