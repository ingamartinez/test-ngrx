import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-button',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button type="button" mat-raised-button color="primary" (click)="openDialog()">
        {{ field.label }}
      </button>
    </div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  dialogRef: MatDialogRef<any>;
  dialogSubs: Subscription;

  direcciones = [
    {

    }
  ];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog(): void {

    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'algo'
    });
    this.subscribeClosed();
  }

  subscribeClosed(): void{
    if (this.dialogRef){
      this.dialogSubs = this.dialogRef.afterClosed().subscribe((data) => {
        console.log(data);
        this.unsubscribe();
      });
    }
  }

  unsubscribe(): void{
    if (this.dialogSubs) {
      this.dialogSubs.unsubscribe();
    }
  }
}
