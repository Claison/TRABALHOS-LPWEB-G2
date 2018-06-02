import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ServicoTurmasService} from '../servico-turmas.service';

@Component({
  selector: 'app-exibir-turmas',
  templateUrl: './exibir-turmas.component.html',
  styleUrls: ['./exibir-turmas.component.css']
})
export class ExibirTurmasComponent implements OnInit {
  @Input( )editando=null;
  @Input( )turmas=null;
  @Output() onEditar=new EventEmitter<any>();
  @Output() onExcluir=new EventEmitter<any>();


  ngOnInit() {
  }


  editar(turma){
    this.onEditar.emit(turma)
  }
  excluir(turma){
    this.onExcluir.emit(turma)
  }

}
