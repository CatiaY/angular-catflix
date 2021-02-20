import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material/material.module';

import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { ErrosFormularioComponent } from './erros-formulario/erros-formulario.component';


@NgModule({
  declarations: [
    InputTextComponent, 
    InputTextareaComponent, 
    InputSelectComponent,
    ErrosFormularioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputTextComponent, 
    InputTextareaComponent, 
    InputSelectComponent,
    ErrosFormularioComponent
  ]
})
export class CamposModule { }
