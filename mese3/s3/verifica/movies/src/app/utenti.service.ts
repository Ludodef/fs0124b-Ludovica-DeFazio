import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';


import { IUsers } from './Modules/iusers';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {




  apiUrl:string = environment.usersUrl
  userArr: IUsers[] = []
  userSubject = new BehaviorSubject<IUsers[]>([]);
  user$ = this.userSubject.asObservable()


constructor(private http:HttpClient) {this.getAll().subscribe(data => {
  this.userSubject.next(data)
  this.userArr = data
})}

  getAll(){
    return this.http.get<IUsers[]>(this.apiUrl)
  }
  }



