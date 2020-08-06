import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';
import { FieldConfig, TypeDependency } from '../models/field.interface';

@Injectable({ providedIn: 'root' })
export class FieldService {
  constructor() {}

  getFieldsPeru(): Observable<FieldConfig[]> {
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
        value: '',
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
        value: '',
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

  getFieldsMexico(): Observable<FieldConfig[]> {
    return of([
      {
        type: 'button',
        label: 'Elegir una dirección'
      },
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
        value: '',
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
        value: '',
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
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Por favor introduzca una dirección'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('[\\/|\\-|\\.|\\,|\\#|\\||\\(|\\)]*[a-zA-Z]*[0-9]*'),
            message: 'Accept only text'
          }
        ]
      },
      {
        type: 'input',
        label: 'Depto. / Int. / Piso / Edificio (Opcional)',
        inputType: 'text',
        name: 'line2',
        maxLength: 10,
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
        label: 'Click aquí para continuar'
      }
    ]);
  }

  cambiarSelect(payload): Observable<any> {
    return of(['Cartagena', 'Barranquilla', 'Medellín']);
  }
}
