import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailorPasswordComponent } from './tailor-password.component';

describe('TailorPasswordComponent', () => {
  let component: TailorPasswordComponent;
  let fixture: ComponentFixture<TailorPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailorPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
