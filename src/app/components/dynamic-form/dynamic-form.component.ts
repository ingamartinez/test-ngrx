import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {FieldConfig, TypeDependency} from '../../field.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as FieldActions from '../../store/field.actions';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  template: `
  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
    <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
    </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value(): object {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  getChange(data: Observable<string[]>, field: FieldConfig) {
    field.dependency.forEach( (dependency, indice, array) => {
      if (dependency.type === TypeDependency.LoadService) {
        const findField = this.fields.find(eachField => {
          return eachField.name === dependency.id;
        });
        if (findField) {
          data.subscribe((options) => {
            findField.options = options;
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.form = this.createControl();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') { return; }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
