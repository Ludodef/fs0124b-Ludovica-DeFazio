import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../Models/car';

@Component({
  selector: 'app-dettaglio-auto',
  templateUrl: './dettaglio-auto.component.html',
  styleUrl: './dettaglio-auto.component.scss'
})
export class DettaglioAutoComponent {
autoArr:Car[] = []
  carSvc: any;

  constructor(private router:ActivatedRoute){}

  ngOnInit(){

    this.carSvc.getAutoById().then((res: Car[]) => {
      this.autoArr = res ;
      })
    this.router.params.subscribe((parametriDellaRotta:any) => {



console.log(parametriDellaRotta.id);
    })
}
}
