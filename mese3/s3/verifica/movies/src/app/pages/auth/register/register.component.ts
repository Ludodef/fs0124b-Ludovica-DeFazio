import { Component } from '@angular/core';
import { ILoginData } from '../../../Modules/i-login-data';
import { AuthService } from '../auth.service';
import { IUsers } from '../../../Modules/iusers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

 registerData:Partial<IUsers> ={}

  constructor(private authSvc:AuthService,
    private router:Router
  ){}

  signUp(){
    this.authSvc.register(this.registerData)
    .subscribe(data =>{
      this.router.navigate(['profilo'])
    })
  }
}
