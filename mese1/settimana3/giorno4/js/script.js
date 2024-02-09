const tableTombolaElement = document.querySelector('.table-tombola');
const buttonTombola = document.querySelector('.extract')


for(let i =1; i <= 99;i++){
const tombolaBox = document.createElement('div')
tombolaBox.classList.add('tabella')
tombolaBox.innerText = i 

tableTombolaElement.append(tombolaBox)
buttonTombola.addEventListener('click', ()=>{
    random()
random()})
}

function random(){
        let numeroCasuale = Math.floor(Math.random()* 100)
        document.querySelector('.number').innerHTML=  'Il tuo numero è' + numeroCasuale
    }

