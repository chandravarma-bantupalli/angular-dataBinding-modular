import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskThreeParentComponent } from './task-three-parent/task-three-parent.component';
import { TaskThreeChildComponent } from './task-three-parent/task-three-child/task-three-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskThreeParentComponent, TaskThreeChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskThreeParentComponent
  ]
})
export class Scenario3Module { }
