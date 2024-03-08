const salva =  document.querySelector('#salva')

salva.addEventListener('click',function(e){
    e.preventDefault()

    let nome = document.querySelector('#nome').value
    let brand = document.querySelector('#brand').value
    let image = document.querySelector('#image').value
    let prezzo = document.querySelector('#prezzo').value
    let description = document.querySelector('#description').value

    let phone = {
        name:nome,
        brand:brand,
        imageUrl:image,
        price:prezzo,
        description
    }

   
    fetch(`https://striveschool-api.herokuapp.com/api/product/`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDZkYzJkN2IxMTAwMTkwZTZkZDQiLCJpYXQiOjE3MDk4ODkyNDUsImV4cCI6MTcxMTA5ODg0NX0.qguxaXp5yX1T9XyEZzgCx6nebnvl9aymqglnIEgK6Qk",
        },
        body:JSON.stringify(phone)
    })
    .then(res => res.json())
    .then(_res => {

        location.href = 'index.html'

    })

})