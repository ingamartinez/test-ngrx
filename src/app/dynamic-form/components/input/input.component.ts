import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';

@Component({
  selector: 'app-input',
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
        maxlength="{{field.maxLength}}"
      />
     <span class="form-control-character-count" *ngIf="field.maxLength"> {{group.get(field.name).value?group.get(field.name).value.length:0}}/ {{field.maxLength}}</span>
      <ng-container
        *ngFor="let validation of field.validations"
        ngProjectAs="mat-error"
      >
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{
          validation.message
        }}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
