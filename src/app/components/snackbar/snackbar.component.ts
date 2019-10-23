import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  showSnackbar(message: string, action: string) {
    const snackbarRef = this.snackbar.open(message, action, {duration: 2000});
    snackbarRef.afterDismissed().subscribe(() => console.log('Snackbar dismissed'));
    snackbarRef.onAction().subscribe(() => console.log('Snackbar action was triggered'));
  }

  openCustomSnackbar() {
    this.snackbar.openFromComponent(CustomSnackbarComponent, {duration: 2000});
  }

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-custom-snackbar',
  template: `<span style='color:orange'>Custom Snackbar</span>`
})
export class CustomSnackbarComponent {}
