import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MidiaService } from '../core/midia.service';
import { AlertaComponent } from '../shared/components/alerta/alerta.component';
import { Alerta } from '../shared/models/alerta';
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
  estaEditando: boolean;
      
  constructor(
    private formBuilder: FormBuilder,    
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private midiaService: MidiaService    
  ) { }

  ngOnInit(): void {
    this.generos = ['Filme', 'Série'];

    this.id = this.activatedRoute.snapshot.params['id'];

    if(this.id) {
      this.estaEditando = true;
      this.midiaService.visualizar(this.id)
        .subscribe((titulo: Midia) => {
          this.criarFormulario(titulo);
        });
    }
    else {
      this.estaEditando = false;
      this.criarFormulario(this.criarCadastroEmBranco());
    }
  }

  //----------------------------------------------------------------------
  submit(): void {           
    this.cadastro.markAllAsTouched();

    if(this.cadastro.invalid){      
      //this.findInvalidControls();
      return;
    }

    //alert('Sucesso!!\n\n' + JSON.stringify(this.cadastro.value, null, 4))
    const titulo = this.cadastro.getRawValue() as Midia;

    if(this.id) {
      titulo.id = this.id;
      this.editar(titulo);
    }
    else {
      this.salvar(titulo);
    }  
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.cadastro.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          invalid.push(name);
      }
    }
    console.log(invalid);
  }

  //----------------------------------------------------------------------
  reiniciarForm(): void {  
    
    if(this.estaEditando) {    
      this.router.navigateByUrl('listar');
    }
    else {        
      this.cadastro.reset();
    }
  }

  //----------------------------------------------------------------------
  private criarCadastroEmBranco(): Midia {
    return {            
      titulo: null,
      urlCapa: null,      
      descricao: null,    
      genero: null,
      favorito: false,
      destaque: false
    } as Midia
  }
  
  // Criação do formulário, passando como parâmetro os controls a serem criados e as validações dos campos:
  private criarFormulario(titulo: Midia): void {
    this.cadastro = this.formBuilder.group({
      titulo: [titulo.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlCapa: [titulo.urlCapa, [Validators.minLength(10)]],      
      descricao: [titulo.descricao],      
      genero: [titulo.genero, [Validators.required]],
      destaque: [titulo.destaque]
    });
  }

  //----------------------------------------------------------------------
  private salvar(titulo: Midia): void {
    this.midiaService.salvar(titulo).subscribe(
      () => this.chamarAlertaSucesso(),
      () => this.chamarAlertaErro()
    );    
  } 

  //----------------------------------------------------------------------
  private editar(titulo: Midia): void {
    this.midiaService.editar(titulo).subscribe(
      () => this.chamarAlertaSucesso(),
      () => this.chamarAlertaErro()
    );    
  } 

  //----------------------------------------------------------------------
  chamarAlertaSucesso(): void {
    const config = this.configAlerta(true);
    const dialogRef = this.dialog.open(AlertaComponent, config);

    // Retorna qual botão o usuário clicou
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.router.navigateByUrl('listar');
      }      
      else {
        this.reiniciarForm();
      }
    });
  }

  chamarAlertaErro(): void {
    const config = this.configAlerta(false);        
    this.dialog.open(AlertaComponent, config);
  }

  //----------------------------------------------------------------------
  configAlerta(sucesso: boolean): any {        
    if(sucesso){
      if(this.estaEditando){
        return {
          data: {                        
            descricao: 'Seu registro foi atualizado com sucesso!',
            btnSucessoTxt: 'Voltar à listagem',
            btnFecharTxt: 'Cadastrar novo título',            
            possuiBtnFechar: true,          
          } as Alerta
        };
      }
      else{
        return {
          data: {            
            btnSucessoTxt: 'Exibir cadastros',
            btnFecharTxt: 'Cadastrar novo título',            
            possuiBtnFechar: true,          
          } as Alerta
        };
      }
    }
    else {
      return {
        data: {            
          titulo: 'Oops...',
          descricao: 'Não foi possível salvar o seu registro =(',
          btnSucessoTxt: 'Fechar',          
        } as Alerta
      };
    }
  }  
}
