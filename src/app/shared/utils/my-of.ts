import { Observable } from "rxjs";

export const myOf = (... args: string[]): Observable<string> => {

    return new Observable<string>((subject) => {
        args.forEach((arg, index) => {
            subject.next(arg); // emition des valeurs
            if (index >= args.length - 1) {
                subject.complete(); // terminaison de l'observation
            }
        });
    });

}