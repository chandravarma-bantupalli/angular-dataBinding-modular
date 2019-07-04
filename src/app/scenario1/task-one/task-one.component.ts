import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  public consoleMessage = '';
  constructor() { }

  ngOnInit() {
  }

  logToConsole() {
    console.log(this.consoleMessage);
  }

}
