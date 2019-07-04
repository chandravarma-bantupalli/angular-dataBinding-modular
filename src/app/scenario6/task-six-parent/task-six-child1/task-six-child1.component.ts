import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-six-child1',
  templateUrl: './task-six-child1.component.html',
  styleUrls: ['./task-six-child1.component.css']
})
export class TaskSixChild1Component implements OnInit {

  @Output() public child1Event = new EventEmitter();
  public child1Message = '';
  constructor() { }

  ngOnInit() {
  }

  typeToSibling() {
    this.child1Event.emit(this.child1Message);
  }

}
