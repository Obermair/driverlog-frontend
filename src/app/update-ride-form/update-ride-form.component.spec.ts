import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRideFormComponent } from './update-ride-form.component';

describe('UpdateRideFormComponent', () => {
  let component: UpdateRideFormComponent;
  let fixture: ComponentFixture<UpdateRideFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRideFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
