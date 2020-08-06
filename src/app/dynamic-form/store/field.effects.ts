import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {mergeMap, withLatestFrom} from 'rxjs/operators';
import {FieldService} from '../services/field.service';
import * as FieldActions from './field.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../models/app.state';
import {Dependency, FieldConfig, TypeDependency} from '../models/field.interface';
import {GetSelectOptionsFromValue, PopulateSelectsFields} from "./field.actions";
import {SelectService} from "../services/select.service";


@Injectable()
export class FieldEffects {

  loadFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldActions.LOAD_FIELDS),
      mergeMap(() => this.fieldService.getFields()),
      mergeMap((fields: FieldConfig[]) => [
        new FieldActions.LoadFieldsSuccess(fields),
        new FieldActions.PopulateSelectsFields(fields)
      ])
    )
  );

  getSelectOptionsFromValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldActions.GET_SELECT_OPTIONS_FROM_VALUE),
      mergeMap((payload: GetSelectOptionsFromValue) => this.fieldService.cambiarSelect(payload).pipe(
        withLatestFrom(this.store.select('fields')),
        mergeMap(([result, fields]) => [
          new FieldActions.GetSelectOptionsFromValueSuccess(this.modifySelect(result, fields, payload)),
        ])
      ))
    )
  );

  populateLoadedFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldActions.POPULATE_SELECTS),
      mergeMap((fieldsConfig: PopulateSelectsFields) => {
        return [
          new FieldActions.PopulateSelectsFieldsSuccess(fieldsConfig.payload)
        ];
      }),
    )
  );

  modifySelect(result, fields, payload): FieldConfig[] {
    const newFields = JSON.parse(JSON.stringify(fields)) as FieldConfig[];

    payload.payload.field.dependency.forEach( (dependency: Dependency) => {
      if (dependency.type === TypeDependency.LoadService) {
        const findField = newFields.find((eachField: FieldConfig) => {
          return eachField.name === dependency.id;
        });
        if (findField) {
          findField.options = result;
        }
      }
    });
    return newFields;
  }

  populateSelectFields(fieldConfig: FieldConfig[]): FieldConfig[] {
    return fieldConfig;
  }

  constructor(
    private actions$: Actions,
    private selectService: SelectService,
    private fieldService: FieldService,
    private store: Store<AppState>
  ) {}
}
