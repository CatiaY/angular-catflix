import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/configParams';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configurarParametros(configParams: ConfigParams): HttpParams {
    let httpParams = new HttpParams();
    
    // Paginate json-server: Retorna uma quantidade limitada de itens (default = 10)
    if(configParams.pagina)
      httpParams = httpParams.set('_page', configParams.pagina.toString());
    
    if(configParams.qtdElementosPorPagina)
      httpParams = httpParams.set('_limit', configParams.qtdElementosPorPagina.toString());
  
    // Full-text search
    if (configParams.pesquisa)
      httpParams = httpParams.set('q', configParams.pesquisa);
    
    // Filter
    if (configParams.campo)
      httpParams = httpParams.set(configParams.campo.tipo, configParams.campo.valor.toString());

    // Sort (order = desc ou asc)
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc'); // Ordena de forma decrescente (inserções mais recentes primeiro)

    return httpParams;
  }
}
