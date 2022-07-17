import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDesignComponent } from './add-new-design.component';

describe('AddNewDesignComponent', () => {
  let component: AddNewDesignComponent;
  let fixture: ComponentFixture<AddNewDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
