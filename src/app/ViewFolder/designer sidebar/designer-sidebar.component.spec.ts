import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSidebarComponent } from './designer-sidebar.component';

describe('SidebarComponent', () => {
  let component: DesignerSidebarComponent;
  let fixture: ComponentFixture<DesignerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
