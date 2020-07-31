import {
  ComponentFactoryResolver,
  Directive,
  Inject,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    @Inject('COMPONENT_MAPPER') private componentMapper: string
  ) {}
  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      this.componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
