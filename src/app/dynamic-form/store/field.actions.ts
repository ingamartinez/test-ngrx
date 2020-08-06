// 1 - Importaciones
import { Action } from '@ngrx/store';
import {Dependency, FieldConfig, TypeDependency} from '../models/field.interface';
import {SelectedField} from '../models/store-fields.interface';

// 2 - Definición del tipo de acción
export const LOAD_FIELDS = '[Fields] Load Fields';
export const LOAD_FIELDS_SUCCESS = '[Fields] Load Fields Success';

export const GET_SELECT_OPTIONS_FROM_VALUE = '[Fields] Get select options from value';
export const GET_SELECT_OPTIONS_FROM_VALUE_SUCCESS = '[Fields] Get select options from value Success';

export const POPULATE_SELECTS = '[Fields] Populate Selects Fields';
export const POPULATE_SELECTS_SUCCESS = '[Fields] Populate Selects Fields Success';


// 3 - Creación de la clase tipo AddTask
export class LoadFields implements Action {
  readonly type = LOAD_FIELDS;
  constructor() { }
}

export class LoadFieldsSuccess implements Action {
  readonly type = LOAD_FIELDS_SUCCESS;
  constructor(public payload: FieldConfig[]) { }
}

export class GetSelectOptionsFromValue implements Action {
  readonly type = GET_SELECT_OPTIONS_FROM_VALUE;
  constructor(public payload: SelectedField) { }
}

export class GetSelectOptionsFromValueSuccess implements Action {
  readonly type = GET_SELECT_OPTIONS_FROM_VALUE_SUCCESS;
  constructor(public payload: FieldConfig[]) { }
}

export class PopulateSelectsFields implements Action {
  readonly type = POPULATE_SELECTS;
  constructor(public payload: FieldConfig[]) { }
}

export class PopulateSelectsFieldsSuccess implements Action {
  readonly type = POPULATE_SELECTS_SUCCESS;
  constructor(public payload: FieldConfig[]) { }
}

// 4 - Exportación de la acción
export type Actions =
  LoadFields |
  LoadFieldsSuccess |
  GetSelectOptionsFromValue |
  GetSelectOptionsFromValueSuccess|
  PopulateSelectsFields |
  PopulateSelectsFieldsSuccess
;
