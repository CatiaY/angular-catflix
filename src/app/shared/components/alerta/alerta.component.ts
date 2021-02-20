import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  // Como essa classe é um Modal, não precisa do @Input()
  // As informações serão passadas por meio da variável data, no Constructor
  alerta: Alerta = {
    titulo: 'Sucesso!',
    descricao: 'Seu registro foi cadastrado com sucesso!',
    btnSucessoTxt: 'Ok',
    btnFecharTxt: 'Fechar',    
    possuiBtnFechar: false
  }

  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit(): void {
    this.alerta.titulo = this.data?.titulo || this.alerta.titulo;
    this.alerta.descricao = this.data?.descricao || this.alerta.descricao;
    this.alerta.btnSucessoTxt = this.data?.btnSucessoTxt || this.alerta.btnSucessoTxt;
    this.alerta.btnFecharTxt = this.data?.btnFecharTxt || this.alerta.btnFecharTxt;    
    this.alerta.possuiBtnFechar = this.data?.possuiBtnFechar || this.alerta.possuiBtnFechar;
  }

}
