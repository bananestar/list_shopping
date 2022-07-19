import { Component, OnInit } from '@angular/core';
import { TodoList } from './models/TodoList';
import { TodoListService } from './services/todo-list.service';
import { LoadingService } from './services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  loading$ = this.loader.loading$;
  todoList: TodoList[] = [];

  constructor(
    private _TodoListService: TodoListService,
    public loader: LoadingService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getTodoLists();
  }

  getTodoLists() {
    return this._TodoListService.getTodoLists().subscribe((data) => {
      this.todoList = data;
    });
  }

  removeTodoList(i: number) {
    this._TodoListService.deleteTodoList(i);
    setTimeout(() => {
      this._router.navigate(['home']);
    }, 1000);
    setTimeout(() => {
      this._router.navigate(['list']);
    }, 1000);
  }
}
