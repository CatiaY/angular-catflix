import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Midia } from '../shared/models/midia';

@Component({
  selector: 'app-cadastrar-midia',
  templateUrl: './cadastrar-midia.component.html',
  styleUrls: ['./cadastrar-midia.component.css']
})
export class CadastrarMidiaComponent implements OnInit {

  cadastro: FormGroup;
  id: number;  
  generos: Array<string>;

  value: string = '';
  checked: boolean = false;
  
  // FormBuilder ajuda a construir um FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario(this.criarCadastroEmBranco());
    this.generos = ['Filme', 'Animação'];
  }

  submit(): void {    
    console.log('salvar');
  }

  reiniciarForm(): void {
    console.log('resetar');
    this.cadastro.reset();
  }

  private criarCadastroEmBranco(): Midia {
    return {            
      titulo: '',
      urlCapa: '',
      urlDestaque: '',
      descricao: '',    
      genero: '',
      favorito: false
    } as Midia
  }
 
  // Criação do formulário, passando como parâmetro os controls a serem criados e as validações dos campos:
  private criarFormulario(titulo: Midia): void {
    this.cadastro = this.formBuilder.group({
      titulo: [titulo.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlCapa: [titulo.urlCapa, [Validators.minLength(10)]],
      urlDestaque: [titulo.urlDestaque, [Validators.minLength(10)]],      
      descricao: [titulo.descricao],      
      genero: [titulo.genero, [Validators.required]],
      destaque: [titulo.destaque]
    });
  }

  

}
