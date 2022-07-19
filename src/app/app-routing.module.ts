import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { ListComponent } from './todo/list/list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: TodoComponent
  },
  {
    path: 'list/:id',
    component: ListComponent
  },
  {
    path: 'addTodo',
    component: AddTodoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
