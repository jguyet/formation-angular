import { TestBed, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule } from '@angular/material';

class RouterMock {
    url = "/";
}

fdescribe('AppComponent', () => {

    let appComponent: AppComponent;
    let fixtureAppComponent: ComponentFixture<AppComponent>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
            imports: [ FormsModule, MatDialogModule, MatButtonModule ],
            providers: [
                { provide: Router, useClass: RouterMock }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixtureAppComponent = TestBed.createComponent(AppComponent);
        appComponent = fixtureAppComponent.componentInstance;
    });

    it('#AppComponent should valid', () => {
        expect(appComponent).toBeDefined();
    });

    it('#AppComponent should html valid', () => {
        let lis: [] = fixtureAppComponent.debugElement.nativeElement.querySelectorAll('li');
        expect(lis.length > 0).toBe(true);
    });

});