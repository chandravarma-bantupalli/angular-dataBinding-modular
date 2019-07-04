import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5-parent',
  templateUrl: './task5-parent.component.html',
  styleUrls: ['./task5-parent.component.css']
})
export class Task5ParentComponent implements OnInit {

  public gChildMessage = '';
  constructor() { }

  ngOnInit() {
  }

}
