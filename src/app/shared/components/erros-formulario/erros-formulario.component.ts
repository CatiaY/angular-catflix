import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../../services/validar-campos.service';

@Component({
  selector: 'app-erros-formulario',
  templateUrl: './erros-formulario.component.html',
  styleUrls: ['./erros-formulario.component.css']
})
export class ErrosFormularioComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  
  constructor(public validarCamposService: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
