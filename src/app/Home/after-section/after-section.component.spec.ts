import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSectionComponent } from './after-section.component';

describe('AfterSectionComponent', () => {
  let component: AfterSectionComponent;
  let fixture: ComponentFixture<AfterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
