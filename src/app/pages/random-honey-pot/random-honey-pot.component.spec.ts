import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomHoneyPotComponent } from './random-honey-pot.component';

describe('RandomHoneyPotComponent', () => {
  let component: RandomHoneyPotComponent;
  let fixture: ComponentFixture<RandomHoneyPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomHoneyPotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomHoneyPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
