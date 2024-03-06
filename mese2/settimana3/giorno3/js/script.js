fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then (dati => {

    console.log(dati);

    for (let book of dati){
        let div = document.createElement('div')
        div.classList.add('col-3')
        document.querySelector('.row').append(div)


        let card= document.createElement('div')
        card.classList.add('card')
        
        div.appendChild(card)

        let img = document.createElement('img')
        img.classList.add('card-img-top')

        img.src = book.img
        card.appendChild(img)

        //card body


        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        card.appendChild(cardBody)

        let title = document.createElement('h5')
        title.classList.add('card-title')
        title.innerText = book.title
        cardBody.appendChild(title)

        let price = document.createElement('p')
        price.classList.add('card-text')
        price.innerText = book.price
        cardBody.appendChild(price)
    }
})