import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';

import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CardsComponent } from './components/cards/cards.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SnackbarComponent, CustomSnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogueComponent, ExampleDialogComponent } from './components/dialogue/dialogue.component';
import { SharedModule } from './shared/shared.module';
import { StorageComponent } from './components/storage/storage.component';
import { LoginComponent } from './components/login/login.component';
import { FormationComponent } from './components/formation/formation.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    SpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackbarComponent,
    DialogueComponent,
    ExampleDialogComponent,
    StorageComponent,
    LoginComponent,
    FormationComponent,
    CounterComponent
  ],
  entryComponents: [CustomSnackbarComponent, ExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
        count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
