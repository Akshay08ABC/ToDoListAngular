import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoModel } from 'src/app/TodoModel';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  addTodoForm!: FormGroup;
  submitted:boolean = false;
  @Output() todoAdd: EventEmitter<ToDoModel> = new EventEmitter();
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.addTodoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      descp: ['', [Validators.required]],
      group: ['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;  
    if(this.addTodoForm.invalid){
      return;
    }        
    const todo = {    
      title: this.addTodoForm.controls.title.value,
      descp: this.addTodoForm.controls.descp.value,
      isActive: true,
      taskGroup: this.addTodoForm.controls.group.value
    };
    this.todoAdd.emit(todo);  
    this.addTodoForm.reset();  
  }
}
