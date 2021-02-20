import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MidiaService } from '../core/midia.service';
import { AlertaComponent } from '../shared/components/alerta/alerta.component';
import { Alerta } from '../shared/models/alerta';
import { ConfigParams } from '../shared/models/configParams';
import { Midia } from '../shared/models/midia';

@Component({
  selector: 'app-listar-midia',
  templateUrl: './listar-midia.component.html',
  styleUrls: ['./listar-midia.component.css']
})
export class ListarMidiaComponent implements OnInit {

  readonly semFoto = '/assets/img/sem-imagem.jpg';

  titulos: Array<Midia> = [];

  private configParams: ConfigParams = {
    pagina: 0,
    qtdElementosPorPagina: 8
  }

  private configAlerta = {
    data: {            
      titulo: 'Você tem certeza de que deseja excluir?',
      descricao: 'Caso você tenha certeza, clique no botão Ok',   
      btnFecharTxt: 'Cancelar',   
      possuiBtnFechar: true                
    } as Alerta
  };

  constructor(
    private router: Router,
    private midiaService: MidiaService,     
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarTitulos();
  }

  private carregarTitulos(): void {
    this.configParams.pagina++;
    this.midiaService.obterTitulos(this.configParams)
      .subscribe((titulos: Array<Midia>) => { 
        this.titulos.push(...titulos);       
      });
  }
  
  onScroll(): void {    
    this.carregarTitulos();
  }

  editar(id: number): void {
    this.router.navigateByUrl('/cadastrar/' + id);
  }

  excluir(id: number): void {    
    const dialogRef = this.dialog.open(AlertaComponent, this.configAlerta);

    // Retorna qual botão o usuário clicou
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.midiaService.excluir(id)
          .subscribe(() => {
            this.configParams.pagina = 0;
            this.titulos = [];
            this.carregarTitulos();
          });        
      }            
    });    
  }
}