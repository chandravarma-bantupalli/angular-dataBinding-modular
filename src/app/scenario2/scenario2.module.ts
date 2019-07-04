import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTwoComponent } from './task-two/task-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskTwoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TaskTwoComponent]
})
export class Scenario2Module { }
