import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task5-child',
  templateUrl: './task5-child.component.html',
  styleUrls: ['./task5-child.component.css']
})
export class Task5ChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  public gChildMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeToParent(event) {
    this.childEvent.emit(event);
    this.gChildMessage = event;
  }

}
