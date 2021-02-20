import { Component, OnInit } from '@angular/core';

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
    qtdElementosPorPagina: 10
  }
  
  constructor( private midiaService: MidiaService ) { }

  ngOnInit(): void {
    this.carregarTitulos();
  }  
  
  private carregarTitulos(): void {
    this.midiaService.obterTitulos(this.configParams)
      .subscribe((titulos: Array<Midia>) => { 
        this.titulos = titulos;
        this.tituloDestaque = this.titulos[0];
      });
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
}