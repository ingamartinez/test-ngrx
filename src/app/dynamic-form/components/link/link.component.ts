import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';

@Component({
  selector: 'app-link',
  template: `
    <div class="form-group">
      <a style="text-decoration: underline;" [href]="field.value">{{field.label}}</a>
    </div>
  `,
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
