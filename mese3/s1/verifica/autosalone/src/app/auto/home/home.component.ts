import { Component } from '@angular/core';
import { Car } from '../../Models/car';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
autoArr:Car[] = []
autoRandom:Car [] = []


constructor (private carSvc:AutoService){}

ngOnInit(){


this.carSvc.getAllCar().then(res => {
  this.autoArr = res;
  this.getRandomCar(2)
  })

}

getRandomCar(n:number){

  for(let i = 0; i < n; i++){

    let rand = Math.floor(Math.random() * this.autoArr.length)

    this.autoRandom.push( this.autoArr[rand] );

  }
console.log(this.autoRandom);

}
}
