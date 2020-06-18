import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunetteComponent } from './lunette.component';

describe('LunetteComponent', () => {
  let component: LunetteComponent;
  let fixture: ComponentFixture<LunetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
