import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todoForm: FormGroup;
  alert: boolean = false;
  messageAlert: string = '';

  constructor(
    private _TodoListService: TodoListService,
    private _todoFormBuilder: FormBuilder,
    private _router: Router
  ) {
    this.todoForm = _todoFormBuilder.group({
      title: '',
      todo: this._todoFormBuilder.array([]),
    });
  }

  todo(): FormArray {
    return this.todoForm.get('todo') as FormArray;
  }

  newTodo(): FormGroup {
    return this._todoFormBuilder.group({
      title: '',
      done: false,
    });
  }

  addNewTodo() {
    this.todo().push(this.newTodo());
  }

  removeNewTodo(i: number) {
    this.todo().removeAt(i);
  }

  ngOnInit(): void {}

  addTodoList() {
    if (this.control()) {
      const body = {
        title: this.todoForm.value.title,
        todo: this.todoForm.value.todo,
      };

      this._TodoListService.setTodoList(body);

      setTimeout(() => {
        this._router.navigate(['list']);
      }, 1000);
    } else {
      this.alert = true;
    }
  }

  control(){
    let control : boolean = true
    switch (true) {
      case this.todoForm.value.title.length === 0:
        this.alertMessage('Title of todo-list is empty');
        control = false
        break;
      case this.todoForm.value.todo.length === 0:
        this.alertMessage('Minimum one task');
        control = false
        break;
    }

    if (this.todoForm.value.todo.length > 0) {
      let temp: string = '';
      for (let i = 0; i < this.todoForm.value.todo.length; i++) {
        if (this.todoForm.value.todo[i].title.length === 0) {
          temp += `The title of task ${i+1} is empty \n`;
        }
      }
      if (temp !== '') {
        this.alertMessage(temp)
        control = false
      }
    }

    return control
  }

  alertMessage(message: string) {
    this.messageAlert = message;
    this.alert = true;
  }
}
