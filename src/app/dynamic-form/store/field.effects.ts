import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import {map, mergeMap, catchError, withLatestFrom, tap} from 'rxjs/operators';
import {FieldService} from '../services/field.service';
import * as FieldActions from './field.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../models/app.state';
import {Dependency, FieldConfig, TypeDependency} from '../models/field.interface';
import {POSTAL_CODE_FILLED} from "./field.actions";


@Injectable()
export class FieldEffects {

  loadFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldActions.GET_FIELDS),
      mergeMap(() => this.fieldService.getFieldsMexico()
        .pipe(
          map(fields => ({ type: FieldActions.LOADED_FIELDS, payload: fields }))
        )
      )
    )
  );
  @Effect()
  modifySelectField$ = this.actions$.pipe(
    ofType(FieldActions.MODIFY_SELECT_FIELD),
    mergeMap((payload) => this.fieldService.cambiarSelect(payload)
      .pipe(
        withLatestFrom(this.store.select('fields')),
        map(([result, fields]) => ({ type: FieldActions.LOADED_FIELDS, payload: this.modifySelect(result, fields, payload) }))
      )
    )
  );

  @Effect()
  postalCodeComponentFilled$ = this.actions$.pipe(
    ofType(FieldActions.POSTAL_CODE_FILLED),
    mergeMap((payload) => this.fieldService.cambiarSelect(payload)
      .pipe(
        withLatestFrom(this.store.select('fields')),
        map(([result, fields]) => ({ type: FieldActions.LOADED_FIELDS, payload: this.modifySelect(result, fields, payload) }))
      )
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

  constructor(
    private actions$: Actions,
    private fieldService: FieldService,
    private store: Store<AppState>
  ) {}
}
