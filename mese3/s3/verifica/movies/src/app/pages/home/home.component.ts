import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { IMovies } from '../../Modules/imovies';
import { MoviesService } from '../../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  movieArr:IMovies[] = []

  constructor(private http:HttpClient, private movieSvc:MoviesService, private router:Router ){}
  ngOnInit(){
    this.http.get('http://localhost:3000/users').subscribe()

    this.movieSvc.$movie.subscribe(movies =>{
      this.movieArr = movies
    })
  }

}
