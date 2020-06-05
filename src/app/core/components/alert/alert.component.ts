import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})

export class AlertComponent implements OnInit {
  @Input('text') text: string = 'Texto';
  @Input('title') title: string = null;
  @Input('top') top: string = '0px';
  @Input('type') type: string = 'success';

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.openSnackBar('cerrar');
  }

  openSnackBar(action: string) {
    this._snackBar.open(this.text, action, {
      duration: 2000,
    });
  }
}


