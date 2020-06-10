import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NinjaComponent } from './components/ninja/ninja.component';


const routes: Routes = [
    { path: 'test', component: NinjaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
