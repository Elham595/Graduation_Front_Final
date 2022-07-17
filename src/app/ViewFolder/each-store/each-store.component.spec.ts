import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachStoreComponent } from './each-store.component';

describe('EachStoreComponent', () => {
  let component: EachStoreComponent;
  let fixture: ComponentFixture<EachStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
