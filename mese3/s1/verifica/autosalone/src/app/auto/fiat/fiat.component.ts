import { Component } from '@angular/core';
import { AutoService } from '../../auto.service';
import { Car } from '../../Models/car';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  autoArr:Car[] = [];

  constructor(private carSvc:AutoService){}

  ngOnInit(){
    this.carSvc.getFiatCar().then(res => {
      this.autoArr = res;
    })
  }

}
