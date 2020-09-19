import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatDividerModule } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockCardApiService {
    getCards() {

    }
}

describe("SelectComponent", () => {
    let selectComponent: SelectComponent;
    let fixture: ComponentFixture<SelectComponent>;
    let cardApiService: CardApiService;
    let cardServiceSpyed;

    beforeEach(() => {
        cardApiService = new MockCardApiService() as CardApiService
        cardServiceSpyed = spyOn(cardApiService, 'getCards');
        TestBed.configureTestingModule({
            declarations: [SelectComponent],
            imports: [
                FormsModule,
                MatSelectModule,
                MatDividerModule,
                HttpClientTestingModule
            ],
            providers: [
                { prodive: CardApiService, useClass: cardApiService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(SelectComponent);
        selectComponent = fixture.componentInstance;
        selectComponent.ngOnInit();//call first life cicle
    });

    it('shoud be defined', () => {
        expect(selectComponent).toBeDefined();
    });

    it('selectedValue shoud be equals to angular8', () => {
        expect(selectComponent.selectedValue).toEqual('angular8');
    });

    it('selectedValue2 shoud be equals to angular9', () => {
        expect(selectComponent.selectedValue2).toEqual('angular9');
    });

    it('getCards shoud be array of 2 cards', () => {
        cardServiceSpyed.and.returnValue(of(
            new Card('blue card', 10, 'rose'),
            new Card('blue card2', 10, 'rose')
        ));

        selectComponent.getCards().subscribe((cards) => {
            expect(cards.length).toEqual(2);
        },
        (e) => {
            expect(false).toBe(true);
        })
    });


});