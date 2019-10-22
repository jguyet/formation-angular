import { Inject } from '@angular/core';


@Inject({
    providedIn: 'root'
})
export class ExampleApiService {

    public test: string = '';

    constructor() {}

    public examplllllee(xx: boolean):string {
        return xx ? 'salut' : 'non';
    }
}