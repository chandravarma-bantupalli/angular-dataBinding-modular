import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSixParentComponent } from './task-six-parent/task-six-parent.component';
import { TaskSixChild1Component } from './task-six-parent/task-six-child1/task-six-child1.component';
import { TaskSixChild2Component } from './task-six-parent/task-six-child2/task-six-child2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskSixParentComponent, TaskSixChild1Component, TaskSixChild2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskSixParentComponent
  ]
})
export class Scenario6Module { }
