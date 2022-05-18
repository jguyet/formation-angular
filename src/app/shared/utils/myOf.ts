import { Observable } from 'rxjs';
import { Card } from '../models/card';

export const myOf = (... args: Card[][]) => {
    return new Observable<Card[]>((subject) => {
        args.forEach((x, i) => {
            subject.next(x);
            if (i === args.length - 1) {
                subject.complete();
            }
        });
    });
};
