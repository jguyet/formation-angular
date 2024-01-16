import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CycleComponent } from './pages/cycle/cycle.component';
import { ExempleComponent } from './pages/exemple/exemple.component';
import { ListComponent } from './pages/list/list.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { adminGuard } from './shared/guards/admin.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
    { path: 'cycle', component: CycleComponent },
    { path: 'exemple', component: ExempleComponent },
    { path: 'list', component: ListComponent },
    { path: 'new-card', component: NewCardComponent },
    { path: '**', component: NotFoundComponent }
];
