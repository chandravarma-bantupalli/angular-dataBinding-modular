import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task5-g-child',
  templateUrl: './task5-g-child.component.html',
  styleUrls: ['./task5-g-child.component.css']
})
export class Task5GChildComponent implements OnInit {

  @Output() public gChildEvent = new EventEmitter();
  public gChildMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeToChild() {
    this.gChildEvent.emit(this.gChildMessage);
  }

}
