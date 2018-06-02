import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ExibirTurmasComponent } from './exibir-turmas/exibir-turmas.component';
import { EditorDeTurmaComponent } from './editor-de-turma/editor-de-turma.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExibirTurmasComponent,
    EditorDeTurmaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
