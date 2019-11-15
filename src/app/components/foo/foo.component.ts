import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  public inputValue: string = "bernard";
  public catName: string = "bernard";

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.catName = this.inputValue;
  }

}
