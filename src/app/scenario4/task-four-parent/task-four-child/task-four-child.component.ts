import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-four-child',
  templateUrl: './task-four-child.component.html',
  styleUrls: ['./task-four-child.component.css']
})
export class TaskFourChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  public childMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeToParent() {
    this.childEvent.emit(this.childMessage);
  }

}
