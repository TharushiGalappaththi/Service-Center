import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantListComponent } from './lubricant-list.component';

describe('LubricantListComponent', () => {
  let component: LubricantListComponent;
  let fixture: ComponentFixture<LubricantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LubricantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
