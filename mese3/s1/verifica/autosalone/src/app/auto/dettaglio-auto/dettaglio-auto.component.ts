import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../Models/car';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-dettaglio-auto',
  templateUrl: './dettaglio-auto.component.html',
  styleUrl: './dettaglio-auto.component.scss'
})
export class DettaglioAutoComponent {
autoArr:Car | undefined

  constructor(private router:ActivatedRoute ,private carSvc:AutoService){}


  ngOnInit(){


    this.router.params.subscribe((parametriDellaRotta:any) => {
     this.carSvc.getAutoById(parametriDellaRotta.id).then(res => this.autoArr = res)
    })
}
}
