import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from 'src/app/sibling-interaction.service';

@Component({
  selector: 'app-task-seven-child2',
  templateUrl: './task-seven-child2.component.html',
  styleUrls: ['./task-seven-child2.component.css']
})
export class TaskSevenChild2Component implements OnInit {

  public myMessage = '';
  constructor(private siblingService: SiblingInteractionService) { }

  ngOnInit() {
  }

  sendToSibling(data) {
    this.siblingService.siblingMessage.next(data = this.myMessage);
  }

}
