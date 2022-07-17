import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesignsComponent } from './view-designs.component';

describe('ViewDesignsComponent', () => {
  let component: ViewDesignsComponent;
  let fixture: ComponentFixture<ViewDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDesignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
