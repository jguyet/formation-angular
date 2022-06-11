import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDivComponent } from './test-div.component';

describe('TestDivComponent', () => {
  let component: TestDivComponent;
  let fixture: ComponentFixture<TestDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains three divs with the FRA flag colors', () => {
    const divs = [...fixture.nativeElement.querySelectorAll('div')];

    expect(divs.map(x => getComputedStyle(x).color)).toEqual(
      [
        'rgb(0, 0, 255)',
        'rgb(255, 255, 255)',
        'rgb(255, 0, 0)'
      ]
    )
  });
});
