import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoModel } from 'src/app/TodoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: ToDoModel;
  @Output() todoDelete: EventEmitter<ToDoModel> = new EventEmitter();
  @Output() todoChecked: EventEmitter<ToDoModel> = new EventEmitter();
  
  ngOnInit(): void {
  }
  onClick(todo:ToDoModel){
    this.todoDelete.emit(todo);
    console.log("Onclick event has been triggered.");
  }
  onChecked(todo:ToDoModel){
    this.todoChecked.emit(todo);
  }
}
