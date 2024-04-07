import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IUsers } from '../../Modules/iusers';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.scss'
})
export class ProfiloComponent {

  constructor(private authSvc:AuthService){}

  user!:IUsers |undefined

  ngOnInit(){
    this.authSvc.user$.subscribe(user =>{


      this.user = user|| undefined;
    })
  }
}
