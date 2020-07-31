import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldEffects} from './store/field.effects';
import {fieldReducer} from './store/field.reducer';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {SelectComponent} from './components/select/select.component';
import {DateComponent} from './components/date/date.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DynamicFieldDirective} from './directives/dynamic-field/dynamic-field.directive';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {componentMapper} from './componentsmap';
import {ButtonSubmitComponent} from './components/button-submit/button-submit.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ButtonSubmitComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('fields', fieldReducer),
    EffectsModule.forFeature([FieldEffects]),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [
    MatDatepickerModule,
    { provide: 'COMPONENT_MAPPER', useValue: componentMapper },
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    ButtonSubmitComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
