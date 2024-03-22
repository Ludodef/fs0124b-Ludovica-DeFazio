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

constructor (private carSvc:AutoService){}

ngOnInit(){

this.carSvc.getAllCar().then(res => this.autoArr = res)
}
}
