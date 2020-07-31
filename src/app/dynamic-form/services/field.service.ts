import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';
import { FieldConfig, TypeDependency } from '../models/field.interface';

@Injectable({ providedIn: 'root' })
export class FieldService {
  constructor() {}

  getFields(): Observable<FieldConfig[]> {
    return of([
      {
        type: 'select',
        label: '¿En qué departamento?',
        name: 'regionIso',
        value: '',
        options: ['dept1', 'dept2', 'dept3', 'dept4'],
        dependency: [
          {
            type: TypeDependency.LoadService,
            id: 'regionIsoParent1',
            endpoint: ''
          }
        ]
      },
      {
        type: 'select',
        label: '¿En qué provincia?',
        name: 'regionIsoParent1',
        value: '',
        options: [],
        dependency: [
          {
            type: TypeDependency.LoadService,
            id: 'regionIsoParent2',
            endpoint: ''
          }
        ]
      },
      {
        type: 'select',
        label: '¿En qué distrito?',
        name: 'regionIsoParent2',
        value: '',
        options: [],
        dependency: []
      },
      {
        type: 'input',
        label: 'Dirección',
        inputType: 'text',
        name: 'line1',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Por favor introduzca una dirección'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
          }
        ]
      },
      {
        type: 'input',
        label: 'Depto. / Int. / Piso / Edificio (Opcional)',
        inputType: 'text',
        name: 'line2',
        validations: [
          {
            name: 'pattern',
            validator: Validators.pattern(
              '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
            ),
            message: 'Invalid email'
          }
        ]
      },
      {
        type: 'input',
        label: 'Referencia (Ej: Paralela a la cuadra 10 de velasco astete) (Opcional)',
        inputType: 'text',
        name: 'referencia',
        validations: [
          {
            name: 'pattern',
            validator: Validators.pattern(
              '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
            ),
            message: 'Invalid email'
          }
        ]
      },
      {
        type: 'input',
        label: 'Télefono de Contacto',
        inputType: 'text',
        name: 'phone',
        validations: [
          {
            name: 'pattern',
            validator: Validators.pattern(
              '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
            ),
            message: 'Invalid email'
          }
        ]
      },
      {
        type: 'buttonSubmit',
        label: 'Save'
      }
    ]);
  }

  cambiarSelect(payload): Observable<any> {
    return of(['Cartagena', 'Barranquilla', 'Medellín']);
  }
}
