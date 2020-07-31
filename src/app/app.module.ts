import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {DynamicFormComponent} from './dynamic-form/components/dynamic-form/dynamic-form.component';
import {InputComponent} from './dynamic-form/components/input/input.component';
import {ButtonComponent} from './dynamic-form/components/button/button.component';
import {SelectComponent} from './dynamic-form/components/select/select.component';
import {DateComponent} from './dynamic-form/components/date/date.component';
import {RadiobuttonComponent} from './dynamic-form/components/radiobutton/radiobutton.component';
import {CheckboxComponent} from './dynamic-form/components/checkbox/checkbox.component';

const componentMapperValues = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    DynamicFormModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DynamicFormComponent
  ],
})
export class AppModule { }
