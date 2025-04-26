import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counterValue  = signal(0);
  // counterValue : number = 0;

  IncrementHandler(){
    this.counterValue.update((val) => val +1);
    //this.counterValue++;
  }

  ResetHandler(){
    this.counterValue.update((val) => val - val);
    //this.counterValue = 0;
  }

  DecrementHandler(){
    this.counterValue.update((val) => val - 1);
    // this.counterValue--;
  }
}
