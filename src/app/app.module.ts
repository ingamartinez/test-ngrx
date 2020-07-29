import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {SelectComponent} from './components/select/select.component';
import {DateComponent} from './components/date/date.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DynamicFieldDirective} from './components/dynamic-field/dynamic-field.directive';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {environment} from '../environments/environment';
import {fieldReducer} from './store/field.reducer';
import {EffectsModule} from '@ngrx/effects';
import {FieldEffects} from './store/field.effects';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    StoreModule.forRoot({fields: fieldReducer}),
    EffectsModule.forRoot([FieldEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class AppModule { }
