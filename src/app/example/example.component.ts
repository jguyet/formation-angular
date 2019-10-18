import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, OnChanges {

    /** Reception of binding attr */
    @Input('number') number: number = 0;

    /** Binding EventEmitter for parent */
    @Output('computeEvent') computeEventEmitter: EventEmitter<number> = new EventEmitter();

    public text: string = 'value';

    public propertyClassCSS: string = 'Rien';

    // CSS PATTERN
    public styleCSS: any = {
        'height': '30px',
        'width': '100%',
        'margin': '5px 10px'
    };

    constructor() { }

    ngOnInit() {
    }

    /** After change detector detect new change call this with simpleChanges pattern */
    ngOnChanges(changes: SimpleChanges) {
        if (changes.number && changes.number.currentValue != changes.number.previousValue) {
            this.compute();
        }
    }
    
    public compute() {
        console.log('number:', this.number);
        this.computeEventEmitter.emit(this.number + 1);
    }

    // EVENT BINDING FUNCTION :
    public click(event) {
        console.log(event);
    }

}
