import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { IMovies } from './Modules/imovies';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http:HttpClient) {
    this.getAll().subscribe(data=>{
    this.movieSubject.next(data)
  this.movieArr=data}) }

  apiUrl:string = environment.moviesUrl
  movieArr: IMovies[] = []
  movieSubject = new BehaviorSubject<IMovies[]>([]);


  $movie = this.movieSubject.asObservable()


  getAll(){return this.http.get<IMovies[]>(this.apiUrl)}

}

