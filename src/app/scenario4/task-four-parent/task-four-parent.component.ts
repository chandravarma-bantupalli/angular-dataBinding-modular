import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-four-parent',
  templateUrl: './task-four-parent.component.html',
  styleUrls: ['./task-four-parent.component.css']
})
export class TaskFourParentComponent implements OnInit {

  public childMessage = '';
  constructor() { }

  ngOnInit() {
  }

}
