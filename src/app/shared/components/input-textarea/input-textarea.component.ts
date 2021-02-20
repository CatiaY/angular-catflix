import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string; 

  constructor() { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}