import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentDetailsComponent } from './view-component-details.component';

describe('ViewComponentDetailsComponent', () => {
  let component: ViewComponentDetailsComponent;
  let fixture: ComponentFixture<ViewComponentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
