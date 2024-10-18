import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { TodosComponent } from './MyComponent/todos/todos.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
