import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginerPasswordComponent } from './desginer-password.component';

describe('DesginerPasswordComponent', () => {
  let component: DesginerPasswordComponent;
  let fixture: ComponentFixture<DesginerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesginerPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesginerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
