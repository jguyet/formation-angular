import { Component, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { changeAction, resetAction } from '../../store/app.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnDestroy {

    public newValue: string;
    public currentValue: Observable<string>;

    private subscription: Subscription = new Subscription();

    constructor(private store: Store<any>) {
        /** recupération d'un observable dans notre store */
        this.currentValue = store.select('value');
        
        /** recupération d'une la nouvelle valeur depuis notre store */
        this.subscription.add(store.select('value').subscribe(x => this.newValue = x.value));
    }

    ngOnDestroy() {
        /** suppression de la souscription */
        this.subscription.unsubscribe();
    }

    change() {
        /** Changement d'état de notre store (ici avec un parametre) */
        this.store.dispatch(changeAction({ value: this.newValue }));
    }
    
    reset() {
        /** ici sans parametre */
        this.store.dispatch(resetAction());
    }

}
