import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSixChild2Component } from './task-six-child2.component';

describe('TaskSixChild2Component', () => {
  let component: TaskSixChild2Component;
  let fixture: ComponentFixture<TaskSixChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSixChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSixChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
