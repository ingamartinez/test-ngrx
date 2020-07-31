// 1 - Importaciones
import * as FieldActions from './field.actions';
import {FieldConfig, TypeDependency} from '../models/field.interface';
import {Validators} from '@angular/forms';
import {ModifySelectField} from './field.actions';

// 2 - Estado inicial
const initialState: FieldConfig[] = [];

// 3 - Switch con las funciones puras
export function fieldReducer(state: FieldConfig[] = initialState, action: FieldActions.Actions) {
  switch (action.type) {
    // case FieldActions.MODIFY_SELECT_FIELD:
    //   return modifyValue(state, action);
    case FieldActions.LOADED_FIELDS:
      return action.payload;
    default:
      return state;
  }
}
