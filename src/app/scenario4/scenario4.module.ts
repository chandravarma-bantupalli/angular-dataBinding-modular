import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFourParentComponent } from './task-four-parent/task-four-parent.component';
import { TaskFourChildComponent } from './task-four-parent/task-four-child/task-four-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskFourParentComponent, TaskFourChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskFourParentComponent
  ]
})
export class Scenario4Module { }
