import { Injectable } from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import { Validators } from '@angular/forms';
import { FieldConfig, TypeDependency } from '../models/field.interface';
import {map, tap} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FieldService {
  constructor() {}

  getConfigFields(): Observable<FieldConfig[]> {
    return of([

      {
        type: 'select',
        label: '¿En qué departamento?',
        name: 'regionIso',
        options: ['dept1', 'dept2', 'dept3', 'dept4'],
        dependency: [
          {
            type: TypeDependency.LoadService,
            id: 'regionIsoParent1',
            endpoint: ''
          }
        ],
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Por favor introduzca un departamento'
          }
        ]
      },
      {
        type: 'select',
        label: '¿En qué provincia?',
        name: 'regionIsoParent1',
        options: [],
        dependency: [
          {
            type: TypeDependency.LoadService,
            id: 'regionIsoParent2',
            endpoint: ''
          }
        ],
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Por favor introduzca una provincia'
          }
        ]
      },
      {
        type: 'select',
        label: '¿En qué distrito?',
        name: 'regionIsoParent2',
        options: [],
        dependency: [],
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Por favor introduzca un distrito'
          }
        ]
      },
      {
        type: 'input',
        label: 'Dirección',
        inputType: 'text',
        name: 'line1',
        maxLength: 59,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Por favor introduzca una dirección'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('[\\/\\-.,#|()a-zA-Z0-9 ]+'),
            message: '',
            callback: (text): string => {
              const regex = /[^\/\-.,#|()a-zA-Z0-9 ]+/gm;
              let m;
              let result = '';
              while ((m = regex.exec(text)) !== null) {
                if (m.index === regex.lastIndex) {
                  regex.lastIndex++;
                }
                result += m;
              }
              const message = `Los siguientes caracteres ingresados no son válidos: (${result}), solo puede ingresar alfanuméricos y los siguientes carácteres especiales /-.,#|()`;
              return message;
            }
          }
        ]
      },
      {
        type: 'input',
        label: 'Depto. / Int. / Piso / Edificio (Opcional)',
        inputType: 'text',
        name: 'line2',
        maxLength: 9,
        validations: [
          {
            name: 'pattern',
            validator: Validators.pattern(
              ''
            ),
            message: 'validation message'
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
              ''
            ),
            message: 'validation message'
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
              ''
            ),
            message: 'validation message'
          }
        ]
      },
      {
        type: 'buttonSubmit',
        label: 'Click aquí para continuar'
      }
    ]);
  }
  getValueFields(): Observable<object> {
    return of(
      {
        regionIso: 'dept3',
        regionIsoParent1: 'Barranquilla',
        regionIsoParent2: 'Medellín',
        line1: 'line 1 from service',
        line2: 'line 2 from service',
        referencia: 'referencia from service',
        phone: 'phone from service'
      }
    );
  }
  getFields(): Observable<FieldConfig[]> {
    return forkJoin([this.getConfigFields(), this.getValueFields()]).pipe(
      map(([fieldsConfig, fieldsValues]) => {
        fieldsConfig.forEach((field) => {
          field.value = fieldsValues[field.name];
        });
        return fieldsConfig;
      }),
      tap((fieldConfig) => console.log(fieldConfig))
    );
  }

  cambiarSelect(payload): Observable<any> {
    return of(['Cartagena', 'Barranquilla', 'Medellín']);
  }
}
