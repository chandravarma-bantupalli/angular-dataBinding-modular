import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5ParentComponent } from './task5-parent/task5-parent.component';
import { Task5ChildComponent } from './task5-parent/task5-child/task5-child.component';
import { Task5GChildComponent } from './task5-parent/task5-child/task5-g-child/task5-g-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Task5ParentComponent, Task5ChildComponent, Task5GChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Task5ParentComponent
  ]
})
export class Scenario5Module { }
