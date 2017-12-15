import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAdminComponent } from './grade-admin.component';

describe('GradeAdminComponent', () => {
  let component: GradeAdminComponent;
  let fixture: ComponentFixture<GradeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
