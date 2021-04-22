import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRideFormComponent } from './insert-ride-form.component';

describe('InsertRideFormComponent', () => {
  let component: InsertRideFormComponent;
  let fixture: ComponentFixture<InsertRideFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRideFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
