import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

    public text: string = 'value';

    public propertyClassCSS: string = 'Rien';

    // CSS PATTERN
    public styleCSS: any = {
        'height': '30px',
        'width': '100%',
        'margin': '5px 10px'
    };

    constructor() { }

    ngOnInit() { }

    // EVENT BINDING FUNCTION :
    public click(event) {
        console.log(event, );
    }

}
