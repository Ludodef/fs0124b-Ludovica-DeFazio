import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { Utenti } from '../../Models/utenti';
import { TodoService } from '../../todo.service';
import { UtentiService } from '../../utenti.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
todoArr: Todo[] = []
utenti?: Utenti



constructor(private todosvc:TodoService){}

ngOnInit(){
this.todoArr = this.todosvc.getAllTodo()

}
}
