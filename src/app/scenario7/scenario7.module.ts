import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSevenParentComponent } from './task-seven-parent/task-seven-parent.component';
import { TaskSevenChild1Component } from './task-seven-parent/task-seven-child1/task-seven-child1.component';
import { TaskSevenChild2Component } from './task-seven-parent/task-seven-child2/task-seven-child2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskSevenParentComponent, TaskSevenChild1Component, TaskSevenChild2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskSevenParentComponent
  ]
})
export class Scenario7Module { }
