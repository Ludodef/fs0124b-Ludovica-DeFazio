let bottone = document.getElementById("salva");

bottone.addEventListener("click", function () {
  const lista = document.querySelector("#lista");
  const input = document.querySelector("#testo");

  let li = document.createElement("li");
  let button = document.createElement("button");

  button.innerText = "elimina";
  li.innerText = input.value;
  li.classList.add('task')
  li.addEventListener('click',function(){
    li.classList.toggle('completed')
  })

  button.addEventListener('click',function(){
    li.remove()
  })

  li.append(button);
  lista.append(li);
  })

  

