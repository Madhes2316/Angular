import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodoPipe',
  standalone: true
})
export class FilterTodoPipePipe implements PipeTransform {

  transform(value: Todo[], searchTerm: string): Todo[] {

    if(!searchTerm){
      return value;
    }

    else{
      let text = searchTerm.toLowerCase();
      return value.filter(todo =>{
        return todo.title.toLowerCase().includes(text);
      })
    }
  }

}
