import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {SelectComponent} from './components/select/select.component';
import {DateComponent} from './components/date/date.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {ButtonSubmitComponent} from './components/button-submit/button-submit.component';

export const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  buttonSubmit: ButtonSubmitComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};
