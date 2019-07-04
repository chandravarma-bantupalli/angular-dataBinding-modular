import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSixParentComponent } from './task-six-parent.component';

describe('TaskSixParentComponent', () => {
  let component: TaskSixParentComponent;
  let fixture: ComponentFixture<TaskSixParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSixParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSixParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
