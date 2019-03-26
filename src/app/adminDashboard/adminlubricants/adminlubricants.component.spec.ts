import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlubricantsComponent } from './adminlubricants.component';

describe('AdminlubricantsComponent', () => {
  let component: AdminlubricantsComponent;
  let fixture: ComponentFixture<AdminlubricantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlubricantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlubricantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
