import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactiveCardComponent } from './add-reactive-card.component';

describe('AddReactiveCardComponent', () => {
  let component: AddReactiveCardComponent;
  let fixture: ComponentFixture<AddReactiveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactiveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
