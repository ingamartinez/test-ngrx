import {
  ComponentFactoryResolver,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { SelectComponent } from '../select/select.component';
import { DateComponent } from '../date/date.component';
import { RadiobuttonComponent } from '../radiobutton/radiobutton.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { Observable, Subscription } from 'rxjs';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};
@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Output() valueChange: EventEmitter<Observable<any>> = new EventEmitter<
    Observable<any>
  >();
  valueChangeSub: Subscription;

  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    this.valueChangeSub = this.componentRef.instance.valueChange;

    if (this.componentRef.instance.selectValueChange) {
      this.valueChangeSub = this.componentRef.instance.selectValueChange.subscribe(
        data => {
          this.valueChange.emit(data);
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.valueChangeSub) {
      this.valueChangeSub.unsubscribe();
    }
  }
}
