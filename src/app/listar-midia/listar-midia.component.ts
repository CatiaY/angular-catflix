import { Component, OnInit } from '@angular/core';
import { MidiaService } from '../core/midia.service';
import { Midia } from '../shared/models/midia';

@Component({
  selector: 'app-listar-midia',
  templateUrl: './listar-midia.component.html',
  styleUrls: ['./listar-midia.component.css']
})
export class ListarMidiaComponent implements OnInit {

  titulos: Array<Midia> = [];

  constructor(private midiaService: MidiaService) { }

  ngOnInit(): void {
    this.titulos = this.midiaService.obterTitulos();
  }

  
}
