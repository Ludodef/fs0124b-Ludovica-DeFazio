import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { Utenti } from '../../Models/utenti';
import { TodoService } from '../../todo.service';
import { UtentiService } from '../../utenti.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {
  todoArr: Todo[] = []
  utentiArr : Utenti[] = []

  constructor(private todosvc:TodoService, private utentisvc:UtentiService){}

  ngOnInit(){

    this.todoArr = this.todosvc.getAllCompleted()
  }
}
