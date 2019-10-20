import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
    { path: 'card/:id', component: CardComponent, pathMatch: 'full' },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
