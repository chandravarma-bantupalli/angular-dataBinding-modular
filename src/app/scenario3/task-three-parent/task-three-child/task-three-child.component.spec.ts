import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreeChildComponent } from './task-three-child.component';

describe('TaskThreeChildComponent', () => {
  let component: TaskThreeChildComponent;
  let fixture: ComponentFixture<TaskThreeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskThreeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskThreeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
