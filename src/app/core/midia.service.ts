import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/configParams';
import { Midia } from '../shared/models/midia';

const URL = 'http://localhost:3000/titulos/';

@Injectable({
  providedIn: 'root'
})
export class MidiaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  obterTitulos(): Array<Midia> {
    return this.filmesMock;
  }
  
  // obterTitulos(configParams: ConfigParams): Observable<Midia[]> {
  //   const httpParams = this.configurarParametros(configParams);
  //   return this.httpClient.get<Midia[]>(URL, { params: httpParams });
  // }

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

  
  filmesMock: Midia[] = [  
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'House of Cards',
      urlCapa: 'assets/img/capa.jpg',
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Testando.',    
      genero: 'filme',
      favorito: false,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',
      urlDestaque: '/assets/img/capa-house.jpg',   
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg',    
      urlDestaque: '/assets/img/capa-house.jpg',
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    },
    {
      id: 1,
      titulo: 'teste',
      urlCapa: 'assets/img/capa.jpg', 
      urlDestaque: '/assets/img/capa-house.jpg',   
      descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',    
      genero: 'filme',
      favorito: true,
      destaque: true
    }
  ]  
}