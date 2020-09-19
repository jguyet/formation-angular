import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { StorageComponent } from './components/storage/storage.component';
import { LoginComponent } from './components/login/login.component';
import { FormationComponent } from './components/formation/formation.component';
import { SimpleSecurityGuard } from './security/simple-security.guard';
import { BlockGuardGuard } from './block-guard.guard';
import { MatchComponent } from './components/match/match.component';
import { JardilandComponent } from './components/jardiland/jardiland.component';


const routes: Routes = [
  // Exemple de module lazy loaded
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(_ => _.LazyModule) },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(_ => _.AdminModule),
    canLoad: [BlockGuardGuard],
    canActivateChild: [BlockGuardGuard]
  },
  /**
   * {
   *    path: 'le path correspond au chemin depuis la racine courante du routing module (faire attention quand notre routing module et un childModule)',
   *    component: Composant a projeter
   *    loadChildren: chemin de votre childModule (permet de faire du lazy loading),
   *    pathMatch: 'full' ou 'prefix' permet gerer une certaine pertinance sur des path (principalement entre routingModule enfant/parent)
   *    redirectTo: 'url of redirection'
   * },
   */
  { path: 'typography', component: TypographyComponent },
  { path: 'button', component: ButtonComponent, canDeactivate: [SimpleSecurityGuard] },
  { path: 'icon', component: IconComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'menu', component: MenuComponent, canActivate:[BlockGuardGuard], canDeactivate:[BlockGuardGuard] },
  { path: 'list', component: ListComponent },
  { path: 'grid', component: GridComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialogue', component: DialogueComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'match', component: MatchComponent },
  { path: 'jardiland', component: JardilandComponent },
  { path: '', component: FormationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
