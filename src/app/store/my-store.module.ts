import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

const store = {
  counter: counterReducer
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(store)
  ]
})
export class MyStoreModule { }
