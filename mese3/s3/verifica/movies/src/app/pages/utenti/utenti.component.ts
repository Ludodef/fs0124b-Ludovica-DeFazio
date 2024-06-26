import { Component } from '@angular/core';
import { IUsers } from '../../Modules/iusers';
import { UtentiService } from '../../utenti.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss'
})
export class UtentiComponent {

  userArr: IUsers[] = []

  constructor(private userSvc:UtentiService){}

  ngOnInit(){
    this.userSvc.user$.subscribe(users =>{
      this.userArr = users
    }

    )
  }
}
