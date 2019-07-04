import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSevenParentComponent } from './task-seven-parent.component';

describe('TaskSevenParentComponent', () => {
  let component: TaskSevenParentComponent;
  let fixture: ComponentFixture<TaskSevenParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSevenParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSevenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
