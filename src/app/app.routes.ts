import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { HooksComponent } from './pages/hooks/hooks.component';
import { ExempleComponent } from './pages/exemple/exemple.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'new/card', component: NewCardComponent },
    { path: 'hooks', component: HooksComponent },
    { path: 'exemple', component: ExempleComponent }
];
