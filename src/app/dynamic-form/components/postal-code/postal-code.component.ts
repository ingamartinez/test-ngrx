import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';

@Component({
  selector: 'app-postal-code',
  template: `
    <mat-form-field
      class="demo-full-width"
      [formGroup]="group"
      *ngIf="!group.get(field.name).disabled"
    >
      <input
        matInput
        [formControlName]="field.name"
        [placeholder]="field.label"
        [type]="field.inputType"
        (ngModelChange)="valueChange($event)"
      />
      <ng-container
        *ngFor="let validation of field.validations"
        ngProjectAs="mat-error"
      >
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{
          validation.message
        }}</mat-error>
      </ng-container>
    </mat-form-field>

    <ng-container *ngFor="let extraField of field.extraFields" dynamicField [field]="extraField" [group]="group">
    </ng-container>
  `,
  styles: []
})
export class PostalCodeComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  valueChange(postalCode: string): void {
    if (postalCode.length > 4) {

    }
  }

}
