import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5GChildComponent } from './task5-g-child.component';

describe('Task5GChildComponent', () => {
  let component: Task5GChildComponent;
  let fixture: ComponentFixture<Task5GChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5GChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5GChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
