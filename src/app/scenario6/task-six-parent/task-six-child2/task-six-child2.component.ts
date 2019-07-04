import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-six-child2',
  templateUrl: './task-six-child2.component.html',
  styleUrls: ['./task-six-child2.component.css']
})
export class TaskSixChild2Component implements OnInit {

  @Input() public child1Message;
  constructor() { }

  ngOnInit() {
  }

}
