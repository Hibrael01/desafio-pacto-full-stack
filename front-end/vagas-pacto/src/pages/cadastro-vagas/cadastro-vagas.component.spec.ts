import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVagasComponent } from './cadastro-vagas.component';

describe('CadastroVagasComponent', () => {
  let component: CadastroVagasComponent;
  let fixture: ComponentFixture<CadastroVagasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroVagasComponent]
    });
    fixture = TestBed.createComponent(CadastroVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
