import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentsHomeComponent } from './view-components-home.component';

describe('ViewComponentsHomeComponent', () => {
  let component: ViewComponentsHomeComponent;
  let fixture: ComponentFixture<ViewComponentsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComponentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
