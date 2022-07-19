import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoList } from '../models/TodoList';
import { TodoListService } from '../services/todo-list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: Partial<TodoList> = {};
  todos: any[] = [];
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _TodoListService: TodoListService
  ) {}

  ngOnInit(): void {
    this._TodoListService
      .getTodoList(this._activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          console.log(data);
          this.list = data;
          //@ts-ignore
          this.list.todo.forEach((element) => {
            this.todos.push(element);
          });
        },
        error: (error) => {
          if (error.status === 404) {
            this._router.navigate(['/404']);
          }
        },
      });
  }

  isDone(i: number, rep: boolean) {
    this.todos[i].done = rep;
  }

  sendRequest() {
    const body = {
      title: this.list.title,
      todo: this.todos,
    };
    this._TodoListService.updateTodoList(body, this.list.id);
    setTimeout(() => {
      this._router.navigate(['home']);
    }, 1000);
    setTimeout(() => {
      this._router.navigate(['list/' + this.list.id]);
    }, 1000);
  }
}
