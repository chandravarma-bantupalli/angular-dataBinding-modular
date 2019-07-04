import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from 'src/app/sibling-interaction.service';

@Component({
  selector: 'app-task5-parent',
  templateUrl: './task5-parent.component.html',
  styleUrls: ['./task5-parent.component.css']
})
export class Task5ParentComponent implements OnInit {

  public gChildMessage = '';
  public grandMessage: any;
  constructor(private messageService: SiblingInteractionService) { }

  ngOnInit() {
    this.messageService.siblingMessage.subscribe(data =>
        this.grandMessage = data
      );
  }

}
