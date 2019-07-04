import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreeParentComponent } from './task-three-parent.component';

describe('TaskThreeParentComponent', () => {
  let component: TaskThreeParentComponent;
  let fixture: ComponentFixture<TaskThreeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskThreeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskThreeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
