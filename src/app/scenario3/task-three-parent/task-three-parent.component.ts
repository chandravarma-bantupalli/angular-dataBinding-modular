import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three-parent',
  templateUrl: './task-three-parent.component.html',
  styleUrls: ['./task-three-parent.component.css']
})
export class TaskThreeParentComponent implements OnInit {

  public parentMessage = '';
  constructor() { }

  ngOnInit() {
  }

}
