import { Component } from '@angular/core';
import {ServicoTurmasService} from './servico-turmas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando={
      id: null,
      disciplinaId: null,
      professorId: null,
      ano:null,
      alunos:null,
  };
  turmas = null;
  constructor(private turmasServico: ServicoTurmasService){
    this.atualiza()
  }
  editor(valor){
    this.editando=valor;

  }
  deletar(valor){
    this.turmasServico.excluir(valor.id)
        .subscribe(() => {
          alert("Turma excluida com sucesso")
            this.atualiza();
        }, () => alert("Não foi possível carregar os dados"))

  }
  atualiza(){
      this.turmasServico.todas()
          .subscribe(turmas => this.turmas = turmas, () => alert("Não foi possível carregar os dados"))
  }
  limpar(){
    this.atualiza()
      this.editando={
          id: null,
          disciplinaId: null,
          professorId: null,
          ano:null,
          alunos:null,
      };
  }
}
