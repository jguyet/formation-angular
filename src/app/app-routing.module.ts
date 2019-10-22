import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: '404', component: Error404Component, pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
