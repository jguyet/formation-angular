import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { HooksComponent } from './pages/hooks/hooks.component';
import { ExempleComponent } from './pages/exemple/exemple.component';
import { TpRxjsComponent } from './pages/tp-rxjs/tp-rxjs.component';
import { BehaviorSubjectComponent } from './pages/behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './pages/async-subject/async-subject.component';
import { RandomHoneyPotComponent } from './pages/random-honey-pot/random-honey-pot.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'new/card', component: NewCardComponent },
    { path: 'hooks', component: HooksComponent },
    { path: 'exemple', component: ExempleComponent },
    { path: 'tp-rxjs', component: TpRxjsComponent },
    { path: 'behavior-subject', component: BehaviorSubjectComponent },
    { path: 'async-subject', component: AsyncSubjectComponent },
    { path: 'random-honey', component: RandomHoneyPotComponent },
];
