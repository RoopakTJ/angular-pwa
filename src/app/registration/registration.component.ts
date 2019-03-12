import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public first:string;
  public last:string;
  public message:string;

  constructor(private data: DataService) { }

  newMessage() {
    // Concatenate first and last name to message string
    this.message = this.first + " " + this.last
    // Putting the message in Service queue to update globally
    this.data.changeMessage(this.message)
    console.log(this.first)
  }

}
