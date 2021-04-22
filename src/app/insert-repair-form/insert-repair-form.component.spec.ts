import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRepairFormComponent } from './insert-repair-form.component';

describe('InsertRepairFormComponent', () => {
  let component: InsertRepairFormComponent;
  let fixture: ComponentFixture<InsertRepairFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRepairFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRepairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
