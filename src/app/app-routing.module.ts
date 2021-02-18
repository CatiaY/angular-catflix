import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMidiaComponent } from './cadastrar-midia/cadastrar-midia.component';
import { ListarMidiaComponent } from './listar-midia/listar-midia.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PaginaPrincipalComponent },       
  { path: 'listar', component: ListarMidiaComponent },      
  { path: 'cadastrar', children: [
    { path: '', component: CadastrarMidiaComponent },    
    { path: ':id', component: CadastrarMidiaComponent }
  ]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
