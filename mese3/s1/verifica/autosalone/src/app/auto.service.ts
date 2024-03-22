import { Injectable } from '@angular/core';
import { Car } from './Models/car';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  getAllCar():Promise<Car[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:Car[]) =>res)
  }

  getFiatCar(): Promise<Car[]>{
    return this.getAllCar()
    .then(res => res.filter(c => c.brand === 'Fiat'))
  }

  getAudiCar(): Promise<Car[]>{
    return this.getAllCar()
    .then(res => res.filter(c => c.brand ==='Audi'))
  }

  getFordCar(): Promise<Car[]>{
    return this.getAllCar()
    .then(res => res.filter(c => c.brand === 'Ford'))
  }
}
