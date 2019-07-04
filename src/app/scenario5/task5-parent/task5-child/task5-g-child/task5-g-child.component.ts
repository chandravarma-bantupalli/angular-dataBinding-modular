import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SiblingInteractionService } from 'src/app/sibling-interaction.service';

@Component({
  selector: 'app-task5-g-child',
  templateUrl: './task5-g-child.component.html',
  styleUrls: ['./task5-g-child.component.css']
})
export class Task5GChildComponent implements OnInit {

  @Output() public gChildEvent = new EventEmitter();
  public gChildMessage = '';
  constructor(private messageService: SiblingInteractionService) { }

  ngOnInit() {
  }

  typeToChild() {
    this.gChildEvent.emit(this.gChildMessage);
  }

  sendToGrand(data) {
    this.messageService.siblingMessage.next(data);
  }

}
