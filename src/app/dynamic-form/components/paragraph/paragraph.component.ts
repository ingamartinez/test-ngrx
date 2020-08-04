import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';

@Component({
  selector: 'app-link',
  template: `
    <div class="form-group">
      <p >{{field.label}}</p>
    </div>
  `,
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
