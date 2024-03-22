import { Component } from '@angular/core';
import { Car } from '../../Models/car';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  autoArr:Car[] = [];

  constructor(private carSvc:AutoService){}

  ngOninit(){
    this.carSvc.getFordCar().then(res => {
      this.autoArr = res;
    })
  }

}
