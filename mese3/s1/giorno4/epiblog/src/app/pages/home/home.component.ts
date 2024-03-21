import { Component } from '@angular/core';
import { AricoliService } from '../../aricoli.service';
import { Article } from '../../Models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articleArr:Article[] = [];
  postRandom:Article[] = []

constructor(private aricoliSvc:AricoliService){}


  ngOnInit(){
    this.aricoliSvc.getAllArticle().then(res => {
      this.articleArr=res;
      this.getRandomPost(4)
    }
    )

  }

  getRandomPost(n:number){
    for (let index = 0; index < n; index++) {
      const element = Math.floor(Math.random()* this.articleArr.length)
      this.postRandom.push(this.articleArr[element])
    }
  }
}
