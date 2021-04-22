import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFuelFormComponent } from './update-fuel-form.component';

describe('UpdateFuelFormComponent', () => {
  let component: UpdateFuelFormComponent;
  let fixture: ComponentFixture<UpdateFuelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFuelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFuelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
