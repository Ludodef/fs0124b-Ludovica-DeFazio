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
    .then(article => this.articleArr = article.posts)
  }
}
