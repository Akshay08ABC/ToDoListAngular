import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';
import { EmployeeApiService } from './ApiService/employee-api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './MyComponent/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
