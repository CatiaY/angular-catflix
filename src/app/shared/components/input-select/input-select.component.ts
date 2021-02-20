import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string;
  @Input() opcoes: Array<string>;

  constructor() { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
