import { Component, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/TodoModel';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos: ToDoModel[];
  personalTodos: ToDoModel[] = [];
  workTodos: ToDoModel[] = [];
  tabId:string = "personal-tabLink";
  constructor(){ 
    this.workTodos = [    
      {        
        title: "Second todo",
        descp: "Lets do something new tomorrow.",
        isActive: true,
        taskGroup: "Work"
      }
    ];   
    this.todos = [
      {  
        title: "First todo",
        descp: "Lets do something new today.",
        isActive: true,
        taskGroup: "Personal"
      }
    ]
  }
  ngOnInit(): void {
    let ptodo = localStorage.getItem("personaltodos");
    this.todos = ptodo ? JSON.parse(ptodo) : [];
    let wtodo = localStorage.getItem("worktodos");
    this.workTodos = wtodo ? JSON.parse(wtodo) : [];

  }
  deleteTodo(todo:ToDoModel){
    console.log(todo);
    if(todo.taskGroup == "Personal"){
      const index = this.todos.indexOf(todo);
      this.todos.splice(index,1);
      localStorage.setItem("personaltodos", JSON.stringify(this.todos));
    }
    else{
      const index = this.workTodos.indexOf(todo);
      this.workTodos.splice(index,1);
      localStorage.setItem("worktodos", JSON.stringify(this.workTodos));
    }
    
  }
  addTodo(todo:ToDoModel){
    console.log(todo);   
    if(todo.taskGroup == "Personal"){
      this.todos.push(todo);
      localStorage.setItem("personaltodos", JSON.stringify(this.todos));
    } 
    else{
      this.workTodos.push(todo);
      localStorage.setItem("worktodos", JSON.stringify(this.workTodos));
    }
    
  }
  toggleTodo(todo:ToDoModel){
    console.log(todo);
    if(todo.taskGroup == "Personal"){
      const index = this.todos.indexOf(todo);
      this.todos[index].isActive = !this.todos[index].isActive;
    }
    else{
      const index = this.workTodos.indexOf(todo);
      this.workTodos[index].isActive = !this.workTodos[index].isActive;
    }
    
  }
  tabChanges(Id:string){
    this.tabId = Id;      
  }
}
