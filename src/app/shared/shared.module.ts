import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { Button2Component } from './components/button2/button2.component';
import { InputComponent } from './components/input/input.component';
import { ThemeDirective } from './directives/theme.directive';
import { FromNowPipePipe } from './pipes/from-now-pipe.pipe';
import { CardService } from './services/card.service';

@NgModule({
    imports: [CommonModule, ButtonComponent, Button2Component, InputComponent, ThemeDirective, FromNowPipePipe],
    exports: [ButtonComponent, Button2Component, InputComponent, ThemeDirective, FromNowPipePipe],
    providers: [CardService],
})
export class SharedModule {}
