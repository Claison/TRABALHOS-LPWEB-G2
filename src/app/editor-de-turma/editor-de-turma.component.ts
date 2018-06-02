import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicoTurmasService} from '../servico-turmas.service';

@Component({
  selector: 'app-editor-de-turma',
  templateUrl: './editor-de-turma.component.html',
  styleUrls: ['./editor-de-turma.component.css']
})
export class EditorDeTurmaComponent implements OnInit {
  @Input( )editando=null;
  @Output() onAtualizar = new EventEmitter<any>();


  disciplinas = null;
  professores=null;
  alunos=null;

  constructor(private servicos: ServicoTurmasService) {
      this.atualizarDisciplinas();
      this.atualizarProfessor();
      this.atualizarAlunos();
  }
    ngOnInit() {
  }

    atualizarDisciplinas(){
        this.servicos.todasDisciplinas()
            .subscribe(disciplinas => {
                this.disciplinas = disciplinas;
            }, () => alert("Erro! Não existe disciplina cadastrada"))
    }
    atualizarProfessor(){
        this.servicos.todosProfessores()
            .subscribe(professor => {
                this.professores = professor;
            }, () => alert("Erro! Professor não cadastrado!"))
    }
    atualizarAlunos(){
        this.servicos.todosAlunos()
            .subscribe(alunos => {
                this.alunos = alunos;
            }, () => alert("Erro! Não existem Alunos cadastrado"))
    }
    salvar(){
      this.servicos.salvar(this.editando)
          .subscribe(() => {
            this.onAtualizar.emit(null)
            alert("Turma cadastrada ou alterada com sucesso!!")

              }, () => alert("Erro"));
    }


}
