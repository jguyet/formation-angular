import { NgModule } from '@angular/core';
import { StoreModule, combineReducers } from '@ngrx/store';
import { ValueReducer } from './value.reducer';



@NgModule({
  declarations: [],
  imports: [
    /** definition des reducers suivant leurs particularités */
    StoreModule.forRoot({
        [ValueReducer.NAME]: ValueReducer.reducer
    })
  ]
})
export class ApplicationStoreModule { }
