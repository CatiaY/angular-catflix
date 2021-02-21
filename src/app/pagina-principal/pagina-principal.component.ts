import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OWLOPTIONS } from 'src/app/core/owl-carousel-config';
import { MidiaService } from '../core/midia.service';
import { ConfigParams } from '../shared/models/configParams';
import { Midia } from '../shared/models/midia';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  semFotoCapa = '././assets/img/sem-imagem.jpg';
  semFotoDestaque = '././assets/img/destaque-sem-imagem.jpg';
  ownOptions = OWLOPTIONS;
  titulos: Array<Midia> = [];
  tituloDestaque: Midia;

  configParams: ConfigParams = {
    pagina: 0,
    qtdElementosPorPagina: 10,
    campo: { tipo: 'destaque', valor: true }
  }
  
  constructor( private activatedRoute: ActivatedRoute, private midiaService: MidiaService ) { }

  ngOnInit(): void {    
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if(params.hasOwnProperty('filtro') && params.hasOwnProperty('valor'))
        { 
          this.configParams.campo.tipo = params['filtro'];
          this.configParams.campo.valor = params['valor'];
        }
      });         

    this.carregarTitulos();
  }  
  
  private carregarTitulos(): void {
    this.midiaService.obterTitulos(this.configParams)
      .subscribe((titulos: Array<Midia>) => { 
        this.titulos = titulos;
        this.tituloDestaque = this.titulos[0];
      });
  }
  
  private resetarConsulta(): void {
    this.configParams.pagina = 0;
    this.titulos = [];
    this.carregarTitulos();
  }

  selecionarDestaque(titulo: Midia): void {
    this.tituloDestaque = titulo;
  }

  favoritar(titulo: Midia): void {
    titulo.favorito = !titulo.favorito;
    this.midiaService.editar(titulo).subscribe();
  }

  obterImagem(): string { 
    return `linear-gradient(to right, rgba(0, 0, 0, 1)5%, rgba(0, 0, 0, .5)40%, rgba(0, 0, 0, 0)100%), 
            url(${(this.tituloDestaque.urlCapa)? this.tituloDestaque.urlCapa : this.semFotoDestaque})`;
  }

  filtrar(filtro: string, valor: any): void {    
    this.configParams.campo = { tipo: filtro, valor: valor };
    this.resetarConsulta();
  }
}