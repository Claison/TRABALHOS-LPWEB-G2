import { TestBed, inject } from '@angular/core/testing';

import { ServicoTurmasService } from './servico-turmas.service';

describe('ServicoTurmasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoTurmasService]
    });
  });

  it('should be created', inject([ServicoTurmasService], (service: ServicoTurmasService) => {
    expect(service).toBeTruthy();
  }));
});
