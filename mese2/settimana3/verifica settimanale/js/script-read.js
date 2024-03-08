fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDZkYzJkN2IxMTAwMTkwZTZkZDQiLCJpYXQiOjE3MDk4ODkyNDUsImV4cCI6MTcxMTA5ODg0NX0.qguxaXp5yX1T9XyEZzgCx6nebnvl9aymqglnIEgK6Qk",
  },
  
})
.then(res => res.json())
.then(phones => {

  console.log(phones);
  for(let phone of phones){
    let colonna = generaClone();

    console.dir(colonna);
    
    let titolo = colonna.querySelector('.card-title')
    titolo.textContent = phone.name
    
    let description = colonna.querySelector('.card-text')
    description.textContent = phone.description

    let image = colonna.querySelector('.card-img-top')
    image.src = phone.imageUrl

    let editBtn = colonna.querySelector('.edit')
    editBtn.href = `edit.html?id=${phone._id}`

    let moreBtn = colonna.querySelector('.see-more')
    moreBtn.href = `see-more.html?id=${phone._id}`
    console.log(titolo);
    
    document.querySelector('#attacca').appendChild(colonna)
  }
})







function generaClone(){
    
    let template = document.querySelector('#template-card')
    let clone = template.content.cloneNode(true)

    return clone;
}
