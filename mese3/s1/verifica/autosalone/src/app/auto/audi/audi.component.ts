import { Component } from '@angular/core';
import { Car } from '../../Models/car';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  autoArr:Car[] = [];

  constructor(private carSvc:AutoService){}

  ngOninit(){
    this.carSvc.getAudiCar().then(res => {
      this.autoArr = res;
    })
  }
}
