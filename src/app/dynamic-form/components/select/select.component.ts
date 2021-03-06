import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig, TypeDependency } from '../../models/field.interface';
import { Observable, of } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as FieldActions from '../../store/field.actions';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <mat-select
        [placeholder]="field.label"
        [formControlName]="field.name"
        (selectionChange)="selectionChange($event)"
      >
        <mat-option *ngFor="let item of field.options" [value]="item">{{
          item
        }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}

  selectionChange($event: MatSelectChange): void {
    this.field.dependency.forEach((dependency, indice, array) => {
      if (dependency.type === TypeDependency.LoadService) {
        this.store.dispatch(
          new FieldActions.ModifySelectField({
            field: this.field,
            value: $event.value
          })
        );
      }
    });
  }

  servicioCambiar(data): Observable<any> {
    return of(['Cartagena', 'Barranquilla', 'Medellín']);
  }
}
