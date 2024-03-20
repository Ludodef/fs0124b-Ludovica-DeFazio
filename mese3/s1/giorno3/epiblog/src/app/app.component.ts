import { Component } from '@angular/core';
import { Articles } from './models/articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  articleArr:Articles[] = [];




  ngOnInit(){
    fetch('../assets/db.json')
    .then(article => article.json())
    .then(article => this.articleArr = article.posts,)

  }

  generateRandomNumber(){
    let index:number = Math.floor(Math.random() + this.articleArr.length)
    return index
  }

  randomArray:Articles[] = []
  generateRandomArray(){
  for (let i = 0 ; i < 4; i++){
    this.randomArray.push(this.articleArr[this.generateRandomNumber()])
  }


  }
}
