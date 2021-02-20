import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  validarCampo(control: AbstractControl, erroNome: string): boolean {
    if((control.dirty || control.touched) && control.hasError(erroNome)) {
      return true;
    }
    return false;
  }

  validarQtdCaracteres(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    // Retorna algum dos erros. Se não houver nenhum, retorna 0:
    return error.requiredLength || error.min || error.max || 0;
  }
}
