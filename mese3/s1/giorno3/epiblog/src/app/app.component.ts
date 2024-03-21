import { Component } from '@angular/core';
import { Articles } from './models/articles';
import { Jsoncontent } from './models/jsoncontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  articleArr:Articles[] = [];
  postRandom:Articles[] = []




  ngOnInit(){
    fetch('../assets/db.json')
    .then(res => res.json())
    .then((contenutoJson:Jsoncontent) =>{
    this.articleArr = contenutoJson.posts,

      this.getRandomPost(4)
    })
  }

  getRandomPost(n:number){
    for (let index = 0; index < n; index++) {
      const element = Math.floor(Math.random()* this.articleArr.length)
      this.postRandom.push(this.articleArr[element])
    }
  }



}
