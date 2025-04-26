import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMsg = signal("Hello from Hello Component ts file");

  KeyUpHandler(){
    console.log("Some key has be pressed");
  }

  KeyUpHandlerWithEvent(event:KeyboardEvent){
    console.log(`The Event from html is ${event.key}`);
  }
}
