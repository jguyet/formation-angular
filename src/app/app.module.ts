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
import { FormationBasicComponent } from './components/formation-basic/formation-basic.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { StatsComponent } from './components/stats/stats.component';
import { ExempleComponent } from './components/exemple/exemple.component';
import { HoverEffectDirective } from './hover-effect.directive';
import { RandomHoneyPotComponent } from './components/random-honey-pot/random-honey-pot.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './redux/counter/counter.reducer';
import { environment } from 'src/environments/environment';
import { CounterComponent } from './components/counter/counter.component';
import { cardsReducer } from './redux/cards/cards.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './redux/cards/cards.effects';

@NgModule({
  declarations: [ // ICI dans declarations je decrit les composants a declarer
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
    FormationBasicComponent,
    FormulaireComponent,
    StatsComponent,
    ExempleComponent,
    HoverEffectDirective,
    RandomHoneyPotComponent,
    NewCardComponent,
    CounterComponent
  ],
  entryComponents: [CustomSnackbarComponent, ExampleDialogComponent], // composant initialisé dés le chargement du module
  imports: [ // toutes les libs (modules à importer).
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      count: counterReducer,
      cards: cardsReducer
    }),
    EffectsModule.forRoot([
      CardsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [ // Ici je declare mes services.

  ],
  bootstrap: [AppComponent] // point d'entrer de l'application
})
export class AppModule { }
