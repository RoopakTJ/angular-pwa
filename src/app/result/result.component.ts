import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  public message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    // Getting the message from Data service and updating the local variable
    this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

}
