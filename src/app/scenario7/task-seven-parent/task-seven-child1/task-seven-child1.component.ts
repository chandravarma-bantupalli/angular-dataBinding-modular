import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from 'src/app/sibling-interaction.service';

@Component({
  selector: 'app-task-seven-child1',
  templateUrl: './task-seven-child1.component.html',
  styleUrls: ['./task-seven-child1.component.css']
})
export class TaskSevenChild1Component implements OnInit {

  public siblingMessage = '';
  constructor( private siblingService: SiblingInteractionService ) { }

  ngOnInit() {
    this.siblingService.siblingMessage.subscribe(data =>
        this.siblingMessage = data
      );
  }

}
