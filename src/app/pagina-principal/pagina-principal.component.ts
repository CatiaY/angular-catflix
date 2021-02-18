import { Component, OnInit } from '@angular/core';

import { OWLOPTIONS } from 'src/app/core/owl-carousel-config';
import { MidiaService } from '../core/midia.service';
import { Midia } from '../shared/models/midia';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  ownOptions = OWLOPTIONS;
  titulos: Array<Midia> = [];
  tituloDestaque: Midia;

  constructor(private midiaService: MidiaService) { }

  ngOnInit(): void {
    this.titulos = this.midiaService.obterTitulos();
    this.tituloDestaque = this.titulos[0];    
  }  
  
  selecionarDestaque(titulo: Midia): void {
    this.tituloDestaque = titulo;
  }

  favoritar(titulo: Midia): void {
    titulo.favorito = !titulo.favorito;
  }
}
