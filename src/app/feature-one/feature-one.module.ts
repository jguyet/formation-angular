import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { LazyComponent } from './components/lazy/lazy.component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    FeatureOneRoutingModule
  ]
})
export class FeatureOneModule { }
