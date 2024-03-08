let url = new URLSearchParams(location.search)
        let id = url.get('_id')



        fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
            
            headers:{
                'Content-type':'application/json',
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDZkYzJkN2IxMTAwMTkwZTZkZDQiLCJpYXQiOjE3MDk4ODkyNDUsImV4cCI6MTcxMTA5ODg0NX0.qguxaXp5yX1T9XyEZzgCx6nebnvl9aymqglnIEgK6Qk",
            }
        })
        .then(res => res.json)
        .then(phone =>{
            let nome = document.querySelector('#nome')
            let brand = document.querySelector('#brand')
            let image = document.querySelector('#image')
            let prezzo = document.querySelector('#prezzo')
            let description = document.querySelector('#description')
            
            nome.value = phone.name
            brand.value = phone.brand
            image.value = phone.imageUrl
            prezzo.value = phone.price
            description.value = phone.description
        })

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

   
    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
        method:'PUT',
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