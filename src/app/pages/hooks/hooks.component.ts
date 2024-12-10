import { Component, OnChanges, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-hooks',
    imports: [],
    templateUrl: './hooks.component.html',
    styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit, AfterViewInit {
    ngOnChanges() {
        console.log('HooksComponent: OnChanges triggered');
    }

    ngOnInit() {
        console.log('HooksComponent: OnInit triggered');
    }

    ngOnDestroy() {
        console.log('HooksComponent: OnDestroy triggered');
    }

    ngAfterContentInit() {
        console.log('HooksComponent: AfterContentInit triggered');
    }

    ngAfterViewInit() {
        console.log('HooksComponent: AfterViewInit triggered');
    }
}
