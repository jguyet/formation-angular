import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

import { IpComponent } from './ip.component';

describe('IpComponent', () => {
  let component: IpComponent;
  let fixture: ComponentFixture<IpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpComponent ],
      providers: [
        { provides: CardApiService, useClass: class {
            getCards(): Card[] {
              return [];
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('color should create', () => {
    const element = fixture.debugElement.query(By.css('.testip')).nativeElement;
  
    expect(getComputedStyle(element).color).toBeTruthy();
  });
});
