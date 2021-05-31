import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationBasicComponent } from './formation-basic.component';

describe('FormationBasicComponent', () => {
  let component: FormationBasicComponent;
  let fixture: ComponentFixture<FormationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
