import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSixChild1Component } from './task-six-child1.component';

describe('TaskSixChild1Component', () => {
  let component: TaskSixChild1Component;
  let fixture: ComponentFixture<TaskSixChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSixChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSixChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
