import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/configParams';
import { Midia } from '../shared/models/midia';
import { ConfigParamsService } from './config-params.service';

const URL = 'http://localhost:3000/titulos/';

@Injectable({
  providedIn: 'root'
})
export class MidiaService {

  constructor(
    private httpClient: HttpClient,
    private configParamsService: ConfigParamsService
  ) { }

  obterTitulos(configParams: ConfigParams): Observable<Midia[]> {
    const httpParams = this.configParamsService.configurarParametros(configParams);
    return this.httpClient.get<Midia[]>(URL, { params: httpParams });
  }

  visualizar(id: number): Observable<Midia> {
    return this.httpClient.get<Midia>(URL + id);
  }

  salvar(titulo: Midia): Observable<Midia> {
    return this.httpClient.post<Midia>(URL, titulo);    
  }

  editar(titulo: Midia): Observable<Midia> {    
    return this.httpClient.put<Midia>(URL + titulo.id, titulo);    
  }

  excluir(id: number): Observable<void> {
    return this.httpClient.delete<void>(URL + id);
  }
}