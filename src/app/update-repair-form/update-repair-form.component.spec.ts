import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRepairFormComponent } from './update-repair-form.component';

describe('UpdateRepairFormComponent', () => {
  let component: UpdateRepairFormComponent;
  let fixture: ComponentFixture<UpdateRepairFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRepairFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRepairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
