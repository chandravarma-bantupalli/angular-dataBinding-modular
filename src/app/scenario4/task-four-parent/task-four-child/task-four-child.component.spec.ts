import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFourChildComponent } from './task-four-child.component';

describe('TaskFourChildComponent', () => {
  let component: TaskFourChildComponent;
  let fixture: ComponentFixture<TaskFourChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFourChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFourChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
