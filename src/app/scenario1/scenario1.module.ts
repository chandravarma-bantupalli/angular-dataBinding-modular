import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskOneComponent } from './task-one/task-one.component';

@NgModule({
  declarations: [TaskOneComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TaskOneComponent]
})
export class Scenario1Module { }
