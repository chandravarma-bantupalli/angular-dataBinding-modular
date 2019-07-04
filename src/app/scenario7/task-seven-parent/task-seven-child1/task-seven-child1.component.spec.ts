import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSevenChild1Component } from './task-seven-child1.component';

describe('TaskSevenChild1Component', () => {
  let component: TaskSevenChild1Component;
  let fixture: ComponentFixture<TaskSevenChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSevenChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSevenChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
