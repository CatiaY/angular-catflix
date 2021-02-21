import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  
  componenteRota: any;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {  }

  onActivate(componentReference: any) {
    this.componenteRota = componentReference;    
  }

  filtrar(filtroTopo: string, valor: any): void {        
    const rota = this.activatedRoute.snapshot.firstChild.routeConfig.path;
    
    if(rota === 'cadastrar') {      
      this.router.navigate(['/home'], { queryParams: { filtro: filtroTopo, valor: valor } });          
    }    
    else {
      this.componenteRota.filtrar(filtroTopo, valor);
    }
  }
}
