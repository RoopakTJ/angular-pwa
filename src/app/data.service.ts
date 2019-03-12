import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Service pipeline to transfer data from one component to another
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject(' ');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // Function to update the string globally
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}