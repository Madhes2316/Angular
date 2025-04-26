import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  
  getTodoFromAPI(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    let response = this.http.get<Array<Todo>>(url);
    return response;
  }
}
