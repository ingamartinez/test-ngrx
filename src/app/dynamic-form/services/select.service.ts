import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../models/app.state';
import {FieldConfig, TypeDependency} from '../models/field.interface';
import * as FieldActions from '../store/field.actions';

@Injectable({ providedIn: 'root' })
export class SelectService {
  constructor(private store: Store<AppState>) {}

  selectionChange(field: FieldConfig, value: string): void {
    if (field.dependency) {
      field.dependency.forEach((dependency) => {
        if (dependency.type === TypeDependency.LoadService && field.type === 'select') {
          this.triggerSelection(field, value);
        }
      });
    }
  }

  protected triggerSelection(field: FieldConfig, value: string): void{
    this.store.dispatch(
      new FieldActions.GetSelectOptionsFromValue({ field, value })
    );
  }
}
