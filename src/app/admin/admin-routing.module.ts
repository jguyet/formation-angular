import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/security/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { RightsComponent } from './components/rights/rights.component';

const routes: Routes = [
  { path: 'rights', component: RightsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
