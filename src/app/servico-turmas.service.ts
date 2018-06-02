import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicoTurmasService {
  API_URL = "http://localhost:3000"
  TURMA_GET = "?_expand=professor&_expand=disciplina"
  constructor(private  http: HttpClient) { }


  todas() {
    return this.http.get(this.API_URL + "/turmas" + this.TURMA_GET)
  }

  todasDisciplinas(){
    return this.http.get(this.API_URL + "/disciplinas/")
  }

  todosProfessores(){
    return this.http.get(this.API_URL + "/professors/")
  }

  todosAlunos(){
    return this.http.get(this.API_URL + "/alunos/")
  }


  excluir(id){
    return this.http.delete(this.API_URL + "/turmas/"+id )

  }

  salvar(turma){
    if(turma.id == null){
      let t = {disciplinaId: turma.disciplinaId, professorId: turma.professorId, ano: turma.ano, alunos:turma.alunos}
      return this.http.post(this.API_URL + "/turmas", t)
    }
    else{
      return this.http.patch(this.API_URL + "/turmas/" + turma.id, turma)
    }
  }
  
}
