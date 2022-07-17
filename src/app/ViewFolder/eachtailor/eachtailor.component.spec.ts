import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachtailorComponent } from './eachtailor.component';

describe('EachtailorComponent', () => {
  let component: EachtailorComponent;
  let fixture: ComponentFixture<EachtailorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachtailorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachtailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
