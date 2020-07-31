// 1 - Importaciones
import { Action } from '@ngrx/store';
import {FieldConfig} from '../../field.interface';
import {SelectedField} from '../models/store-fields.interface';

// 2 - Definición del tipo de acción
export const MODIFY_SELECT_FIELD = 'Modify Select Field';
export const GET_FIELDS = 'Get All Fields';
export const LOADED_FIELDS = 'Loaded Fields';

// 3 - Creación de la clase tipo AddTask
export class ModifySelectField implements Action {
  readonly type = MODIFY_SELECT_FIELD;
  constructor(public payload: SelectedField) { }
}

export class GetFields implements Action {
  readonly type = GET_FIELDS;
  constructor() { }
}

export class LoadedFields implements Action {
  readonly type = LOADED_FIELDS;
  constructor(public payload: SelectedField) { }
}

// 4 - Exportación de la acción
export type Actions = ModifySelectField | GetFields | LoadedFields;
