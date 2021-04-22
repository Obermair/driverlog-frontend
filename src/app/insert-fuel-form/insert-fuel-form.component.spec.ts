import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFuelFormComponent } from './insert-fuel-form.component';

describe('InsertFuelFormComponent', () => {
  let component: InsertFuelFormComponent;
  let fixture: ComponentFixture<InsertFuelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFuelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFuelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
