import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {FieldConfig, TypeDependency} from './field.interface';
import {FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './app.state';
import * as FieldActions from './store/field.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  form: FormGroup;
  regConfig: Observable<FieldConfig[]>;

  constructor(
    private store: Store<AppState>
  ) {
    // Accedemos a la store:
    this.regConfig = this.store.select('fields');
  }

  ngOnInit(): void {
    this.store.dispatch(new FieldActions.GetFields());
  }

  submit(value: any) {}

  ngAfterViewInit(): void {
    this.form = this.dynamicForm.form;
  }

}
