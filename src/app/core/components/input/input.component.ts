import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input('type') type: string = 'text';
  //@Input() disabled: boolean = false;
  @Input() edit: boolean = true;
  @Input() form: FormGroup;
  @Input() key: string;
  @Input() label: string;
  @Input() logo: string;
  @Input() skipValidation: boolean = false;
  @Input() tooltip: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onKeyup: EventEmitter<any> = new EventEmitter<any>();
}
