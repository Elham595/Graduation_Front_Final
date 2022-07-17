import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePasswordComponent } from './store-password.component';

describe('StorePasswordComponent', () => {
  let component: StorePasswordComponent;
  let fixture: ComponentFixture<StorePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
