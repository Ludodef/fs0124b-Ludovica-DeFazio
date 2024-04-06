import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IUsers } from '../../Modules/iusers';
import { HttpClient } from '@angular/common/http';

type AccessData = {
  accessToken:string,
  user:IUsers
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<IUsers|null>(null)

  user$= this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(private http:HttpClient) { }

  login(loginData:any):Observable<AccessData>{}

  register(newUser:Partial<IUsers>):Observable<AccessData>{
    return this.http.post<AccessData>('http://localhost:3000/register', newUser)
  }
}
