import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipePipe } from '../pipes/filter-todo-pipe.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf,TodoItemComponent,FormsModule,FilterTodoPipePipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{

  todoService = inject(TodosService);
  todoItemsFromService = signal<Array<Todo>>([]);

  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService.getTodoFromAPI().pipe(
      catchError((err)=>{
        console.log(err);
        throw err;
      })
    ).subscribe(
      (todoItems) =>{
        this.todoItemsFromService.set(todoItems);
      }
    )
  }

  updateCheckBox(item:Todo){
    console.log(item);

    this.todoItemsFromService.update((todoItems)=>{
      return todoItems.map(todos =>{
        if(todos.id === item.id){
          return{
            ...todos,
            completed: !todos.completed
          }
        }
        else{
          return todos
        }
      })
    })
  }
}
