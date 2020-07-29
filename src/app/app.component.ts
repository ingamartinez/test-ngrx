import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {FieldConfig, TypeDependency} from './field.interface';
import {FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit{
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  form: FormGroup;
  regConfig: FieldConfig[] = [
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
  ];

  submit(value: any) {}

  ngAfterViewInit(): void {
    this.form = this.dynamicForm.form;
  }

}
