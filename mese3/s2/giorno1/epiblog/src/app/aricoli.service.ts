import { Injectable } from '@angular/core';
import { Article } from './Models/article';

@Injectable({
  providedIn: 'root'
})
export class AricoliService {

  getAllArticle():Promise<Article[]>{

    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:Article[]) => res)

  }

  getActiveArticle():Promise<Article[]>{
    return this.getAllArticle()
    .then(res => res.filter(p => p.active))
  }

  getInactiveArticle():Promise<Article[]>{
    return this.getAllArticle()
    .then(res => res.filter(p => !p.active))
  }
}
