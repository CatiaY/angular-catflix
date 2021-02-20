import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string; 

  constructor() { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
