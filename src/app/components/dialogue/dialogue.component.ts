import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExampleDialogComponent, { data: { name: 'Piyush' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}

@Component({
  selector: 'app-example-dialog',
  template: `<h2 mat-dialog-title>Session Timeout</h2>
  <mat-dialog-content>You'll be logged out due to inactivity</mat-dialog-content>
  <mat-dialog-actions>
      <button mat-button mat-dialog-close="keep logged in tapped">Keep me logged in</button>
      <button mat-button mat-dialog-close="log out tapped">Log out</button>
  </mat-dialog-actions>`
})
export class ExampleDialogComponent {
  constructor() { }
}
