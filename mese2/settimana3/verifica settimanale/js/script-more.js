let url = new URLSearchParams(location.search)
        let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
            
headers:{
    'Content-type':'application/json',
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDZkYzJkN2IxMTAwMTkwZTZkZDQiLCJpYXQiOjE3MDk4ODkyNDUsImV4cCI6MTcxMTA5ODg0NX0.qguxaXp5yX1T9XyEZzgCx6nebnvl9aymqglnIEgK6Qk",
}
})
.then(res => res.json())
.then(phone =>{
let nome = document.querySelector('.title')
let brand = document.querySelector('.brand')
let image = document.querySelector('.image')
let prezzo = document.querySelector('.price')
let description = document.querySelector('.description')

nome.innerText= phone.name
brand.innerText = phone.brand
image.src = phone.imageUrl
prezzo.innerText= phone.price
description.innerText = phone.description
})