// 1 - Importaciones
import * as FieldActions from './field.actions';
import {FieldConfig} from '../models/field.interface';

// 2 - Estado inicial
const initialState: FieldConfig[] = [];

// 3 - Switch con las funciones puras
export function fieldReducer(state: FieldConfig[] = initialState, action: FieldActions.Actions): FieldConfig[] {
  switch (action.type) {
    case FieldActions.LOAD_FIELDS_SUCCESS:
      return action.payload;
    case FieldActions.GET_SELECT_OPTIONS_FROM_VALUE_SUCCESS:
      return action.payload;
    case FieldActions.POPULATE_SELECTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
