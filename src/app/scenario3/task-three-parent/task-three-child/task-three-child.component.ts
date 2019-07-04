import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-three-child',
  templateUrl: './task-three-child.component.html',
  styleUrls: ['./task-three-child.component.css']
})
export class TaskThreeChildComponent implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
