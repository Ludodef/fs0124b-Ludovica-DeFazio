import { Component } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
show:boolean= false
isUserLoggedIn:boolean = false

constructor(private authSvc:AuthService){}

ngOnInit(){
  this.authSvc.isLoggedIn$.subscribe(data => {
    this.isUserLoggedIn = data
  })
}

  logout(){
    this.authSvc.logout()
  }

}
