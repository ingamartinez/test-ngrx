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
        label: 'Click aquí para continuar'
      }
    ]);
  }

  getFieldsMexico(): Observable<FieldConfig[]> {
    return of([
      {
        type: 'checkbox',
        label: 'Solicitar Factura',
        name: 'factura',
        value: false,
        dependency: [],
        disabled: true,
        hidden: true
      },
      {
        type: 'link',
        label: 'Ingrese aquí para modificar sus datos de facturación.',
        name: 'link',
        value: 'https://tv-compra.tiendabelcorp.com:9002/mx/my-account/edit-invoice-request',
        dependency: []
      },
      {
        type: 'postalcode',
        label: 'Ingresa tu código postal',
        inputType: 'text',
        name: 'postalcode',
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
        ],
        extraFields: [
          {
            type: 'paragraph',
            label: '¿No sabes tu código postal?',
            name: 'link',
            value: 'https://tv-compra.tiendabelcorp.com:9002/mx/my-account/edit-invoice-request',
            dependency: []
          },
          {
            type: 'link',
            label: 'Encuéntralo aquí',
            name: 'link',
            value: 'https://micodigopostal.org/',
            dependency: []
          },
        ],
        dependency: [
          {
            type: TypeDependency.HideShow,
            id: 'regionIso',
            endpoint: ''
          },
          {
            type: TypeDependency.HideShow,
            id: 'regionIsoParent1',
            endpoint: ''
          }
          ,
          {
            type: TypeDependency.HideShow,
            id: 'regionIsoParent2',
            endpoint: ''
          },
          {
            type: TypeDependency.HideShow,
            id: 'line1',
            endpoint: ''
          },
          {
            type: TypeDependency.HideShow,
            id: 'line2',
            endpoint: ''
          },
          {
            type: TypeDependency.HideShow,
            id: 'referencia',
            endpoint: ''
          },
          {
            type: TypeDependency.HideShow,
            id: 'phone',
            endpoint: ''
          }
        ],
      },
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
        ],
        disabled: true,
        hidden: true,
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
        ],
        disabled: true,
        hidden: true
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
        ],
        disabled: true,
        hidden: true
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
        ],
        disabled: true,
        hidden: true
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
        ],
        disabled: true,
        hidden: true
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
        ],
        disabled: true,
        hidden: true
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
        ],
        disabled: true,
        hidden: true
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

  postalCode(payload): Observable<any> {
    return of(['Cartagena', 'Barranquilla', 'Medellín']);
  }
}
