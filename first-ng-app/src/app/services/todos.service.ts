import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      userId: 1,
      completed: false,
      title: 'Groceries',
      id: 0
    },
    {
      userId: 1,
      completed: false,
      title: 'Hair Cut',
      id: 1
    }
  ];
  constructor() { }
}
