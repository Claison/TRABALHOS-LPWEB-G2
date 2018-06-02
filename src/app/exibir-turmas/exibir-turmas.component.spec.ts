import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirTurmasComponent } from './exibir-turmas.component';

describe('ExibirTurmasComponent', () => {
  let component: ExibirTurmasComponent;
  let fixture: ComponentFixture<ExibirTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
