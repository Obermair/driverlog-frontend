import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDriverFormComponent } from './insert-driver-form.component';

describe('InsertDriverFormComponent', () => {
  let component: InsertDriverFormComponent;
  let fixture: ComponentFixture<InsertDriverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDriverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
