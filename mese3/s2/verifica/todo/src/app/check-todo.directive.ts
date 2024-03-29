import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCheckTodo]'
})
export class CheckTodoDirective {
  @Input() appCheckTodo: any

  constructor(private ref:ElementRef) { }
  @HostListener('change')onChecked(checked:boolean){
    this.appCheckTodo.completed = checked
  }

}
