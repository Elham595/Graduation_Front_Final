import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesginersComponent } from './all-desginers.component';

describe('AllDesginersComponent', () => {
  let component: AllDesginersComponent;
  let fixture: ComponentFixture<AllDesginersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesginersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDesginersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
