import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { CardService } from '../../shared/services/card.service';
import { Card } from '../../shared/components/card/card';
import { map, of, switchMap } from 'rxjs';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-trimestre-page',
  standalone: true,
  imports: [AsyncPipe, Card],
  templateUrl: './trimestre-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrimestrePage {
  // 1. Inputs que recebem os parâmetros da rota automaticamente!
  materiaId = input<string>();
  trimestreNum = input<number>();

  private cardService = inject(CardService);
  private databaseService = inject(DatabaseService);

  // 2. Sinal computado que reage a mudanças na URL
  private params = computed(() => ({
    materiaId: this.materiaId(),
    trimestreNum: this.trimestreNum(),
  }));

  // 3. Busca os cards toda vez que a URL (e os params) mudar
  cards$ = toObservable(this.params).pipe(
    // Garante que só vamos buscar os dados se os parâmetros existirem
    switchMap((p) => {
      if (!p.materiaId || !p.trimestreNum) {
        return of([]); // Retorna um array vazio se não tivermos os parâmetros
      }
      return this.cardService.getCards(p.materiaId, p.trimestreNum);
    })
  );

  materiaNome$ = toObservable(this.materiaId).pipe(
    switchMap((id) => {
      if (!id) return of('Carregando...');
      return this.databaseService
        .getMaterias()
        .pipe(
          map(
            (materias) => materias.find((m) => m.id === id)?.nome || 'Matéria'
          )
        );
    })
  );
}
