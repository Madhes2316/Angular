import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{

  todoService = inject(TodosService);
  todoItemsFromService = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItemsFromService.set(this.todoService.todoItems);
  }
}
