import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from '../models/TodoList';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  apiUrl = 'http://localhost:3000/list';

  constructor(private _httpClient: HttpClient) {}

  getTodoLists() {
    return this._httpClient.get<TodoList[]>(this.apiUrl);
  }

  getTodoList(id: number) {
    return this._httpClient.get(`${this.apiUrl}/${id}`);
  }

  setTodoList(body: any) {
    this._httpClient.post<any>(this.apiUrl, body).subscribe({
      next: (data) => {
        console.log('send ' + data);
      },
      error: (error) => {
        console.warn('error ' + error);
      },
    });
  }

  deleteTodoList(i: number) {
    this._httpClient.delete(this.apiUrl + '/' + i).subscribe({
      next: (data) => {
        console.log('delete ' + data);
      },
      error: (error) => {
        console.log('error ' + error);
      },
    });
  }

  updateTodoList(body: any, id: number | undefined) {
    this._httpClient.put(this.apiUrl + '/' + id, body).subscribe({
      next: (data) => {
        console.log('save ' + data);
      },
      error: (error) => {
        console.log('error ' + error);
      },
    });
  }
}
