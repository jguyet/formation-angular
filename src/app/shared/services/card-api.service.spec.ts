import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { CardApiService } from './card-api.service';

describe('CardApiService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should be created', () => {
        const service: CardApiService = TestBed.get(CardApiService);
        expect(service).toBeTruthy();
    });
});
