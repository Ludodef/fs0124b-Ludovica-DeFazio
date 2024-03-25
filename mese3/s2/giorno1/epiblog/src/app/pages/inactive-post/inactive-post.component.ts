import { Component } from '@angular/core';
import { Article } from '../../Models/article';
import { AricoliService } from '../../aricoli.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {
  articleArr:Article[] = [];

  constructor(private aricoliSvc:AricoliService){}

  ngOnInit(){
    this.aricoliSvc.getInactiveArticle().then(res => {
      this.articleArr=res;
    })
  }
}
