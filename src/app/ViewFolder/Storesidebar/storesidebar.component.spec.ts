import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresidebarComponent } from './storesidebar.component';

describe('StoresidebarComponent', () => {
  let component: StoresidebarComponent;
  let fixture: ComponentFixture<StoresidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoresidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
