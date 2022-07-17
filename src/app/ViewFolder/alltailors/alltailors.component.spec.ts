import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltailorsComponent } from './alltailors.component';

describe('AlltailorsComponent', () => {
  let component: AlltailorsComponent;
  let fixture: ComponentFixture<AlltailorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltailorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltailorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
