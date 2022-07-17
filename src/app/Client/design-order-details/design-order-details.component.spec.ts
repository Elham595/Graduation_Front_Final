import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOrderDetailsComponent } from './design-order-details.component';

describe('DesignOrderDetailsComponent', () => {
  let component: DesignOrderDetailsComponent;
  let fixture: ComponentFixture<DesignOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
