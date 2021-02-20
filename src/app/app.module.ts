import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './shared/material/material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TopoComponent } from './topo/topo.component';
import { CadastrarMidiaComponent } from './cadastrar-midia/cadastrar-midia.component';
import { ListarMidiaComponent } from './listar-midia/listar-midia.component';
import { AlertaComponent } from './shared/components/alerta/alerta.component';
import { CamposModule } from './shared/components/campos.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    TopoComponent,    
    CadastrarMidiaComponent, 
    ListarMidiaComponent,     
    AlertaComponent    
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    MaterialModule,    
    InfiniteScrollModule,
    CamposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }