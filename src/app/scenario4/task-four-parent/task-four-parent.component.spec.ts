import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFourParentComponent } from './task-four-parent.component';

describe('TaskFourParentComponent', () => {
  let component: TaskFourParentComponent;
  let fixture: ComponentFixture<TaskFourParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFourParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFourParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
