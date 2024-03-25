import { Component } from '@angular/core';
import { AricoliService } from '../../aricoli.service';
import { Article } from '../../Models/article';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  articleArr:Article[] = [];

  constructor(private aricoliSvc:AricoliService){}

  ngOnInit(){
    this.aricoliSvc.getActiveArticle().then(res => {
      this.articleArr=res;
    })
  }
}
