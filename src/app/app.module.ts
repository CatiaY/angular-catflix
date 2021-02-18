import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './shared/material/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TopoComponent } from './topo/topo.component';
import { CadastrarMidiaComponent } from './cadastrar-midia/cadastrar-midia.component';
import { ListarMidiaComponent } from './listar-midia/listar-midia.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { InputTextareaComponent } from './shared/components/input-textarea/input-textarea.component';
import { InputSelectComponent } from './shared/components/input-select/input-select.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    TopoComponent,    
    CadastrarMidiaComponent, 
    ListarMidiaComponent, 
    InputTextComponent, 
    InputTextareaComponent, 
    InputSelectComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
