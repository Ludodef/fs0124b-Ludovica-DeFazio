import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IUsers } from '../../Modules/iusers';
import { HttpClient } from '@angular/common/http';
import { ILoginData } from '../../Modules/i-login-data';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

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
  isLoggedIn$ = this.user$.pipe(map(user => !!user), tap(user => this.syncIsLoggedIn = user))
  syncIsLoggedIn = false

  constructor(private http:HttpClient, private router:Router) {

    this.restoreUser()
   }

  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl

  login(loginData:ILoginData):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl,loginData)
    .pipe(tap(data => {
      this.authSubject.next(data.user)
      localStorage.setItem('accessData',JSON.stringify(data))

      this.autoLogout(data.accessToken)
    }))


  }
  logout(){
    this.authSubject.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['/auth/login'])
  }
  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(() => {
      this.logout()
    },expMs)
  }

  getAccessToken():string{
    const userJson = localStorage.getItem('accessData')
    if(!userJson) return '';
    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return ''
    return accessData.accessToken

  }

  register(newUser:Partial<IUsers>):Observable<AccessData>{
    return this.http.post<AccessData>(this.registerUrl, newUser)
  }

  restoreUser(){
    const userJson = localStorage.getItem('accessData')
    if(!userJson) return;

    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.authSubject.next(accessData.user)
    this.autoLogout(accessData.accessToken)
  }
}
