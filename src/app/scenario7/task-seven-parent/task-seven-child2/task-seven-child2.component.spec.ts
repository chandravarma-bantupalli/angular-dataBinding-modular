import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSevenChild2Component } from './task-seven-child2.component';

describe('TaskSevenChild2Component', () => {
  let component: TaskSevenChild2Component;
  let fixture: ComponentFixture<TaskSevenChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSevenChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSevenChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
