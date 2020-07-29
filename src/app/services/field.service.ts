import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';
import { FieldConfig, TypeDependency } from '../field.interface';

@Injectable({ providedIn: 'root' })
export class FieldService {
  constructor() {}

  getFields(): Observable<FieldConfig[]> {
    return of([
      {
        type: 'input',
        label: 'Username',
        inputType: 'text',
        name: 'name',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required'
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
        label: 'Email Address',
        inputType: 'email',
        name: 'email',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Email Required'
          },
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
        label: 'Password',
        inputType: 'password',
        name: 'password',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Password Required'
          }
        ]
      },
      {
        type: 'radiobutton',
        label: 'Gender',
        name: 'gender',
        options: ['Male', 'Female'],
        value: 'Male'
      },
      {
        type: 'date',
        label: 'DOB',
        name: 'dob',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Date of Birth Required'
          }
        ]
      },
      {
        type: 'select',
        label: 'Country',
        name: 'country',
        value: '',
        options: ['Colombia', 'Chile'],
        dependency: [
          {
            type: TypeDependency.LoadService,
            id: 'city'
          }
        ]
      },
      {
        type: 'select',
        label: 'Ciudad',
        name: 'city',
        value: '',
        options: [],
        dependency: [
          {
            type: TypeDependency.LoadService,
            id: 'other'
          }
        ]
      },
      {
        type: 'select',
        label: 'Otro',
        name: 'other',
        options: [],
        value: '',
        dependency: []
      },
      {
        type: 'checkbox',
        label: 'Accept Terms',
        name: 'term',
        value: true,
        dependency: [
          {
            type: TypeDependency.HideShow,
            id: 'name'
          },
          {
            type: TypeDependency.HideShow,
            id: 'email'
          }
        ]
      },
      {
        type: 'button',
        label: 'Save'
      }
    ]);
  }

  cambiarSelect(payload): Observable<any> {
    return of(['Cartagena', 'Barranquilla', 'Medellín']);
  }
}
