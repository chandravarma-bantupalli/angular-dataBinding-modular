import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-six-parent',
  templateUrl: './task-six-parent.component.html',
  styleUrls: ['./task-six-parent.component.css']
})
export class TaskSixParentComponent implements OnInit {

  public child1Message;
  constructor() { }

  ngOnInit() {
  }

}
