import { CampoGenerico } from "./campo-generico";

export interface ConfigParams {
    pagina?: number;
    qtdElementosPorPagina?: number; 
    pesquisa?: string;    
    campo?: CampoGenerico;    
}