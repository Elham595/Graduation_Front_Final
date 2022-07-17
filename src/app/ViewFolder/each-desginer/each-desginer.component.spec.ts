import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachDesginerComponent } from './each-desginer.component';

describe('EachDesginerComponent', () => {
  let component: EachDesginerComponent;
  let fixture: ComponentFixture<EachDesginerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachDesginerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachDesginerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
