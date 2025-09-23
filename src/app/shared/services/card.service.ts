import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import type { CardData } from '../models/card.model';

// O tipo de CADA arquivo JSON de matéria (ex: matematica.json)
type MateriaData = Record<string, CardData[]>;

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly http = inject(HttpClient);

  getCards(materiaId: string, trimestreNum: number): Observable<CardData[]> {
    const dataUrl = `assets/data/${materiaId}.json`;

    return this.http.get<MateriaData>(dataUrl).pipe(
      map((materiaData) => materiaData[trimestreNum] || []),
      catchError((error) => {
        console.error(`Falha ao carregar os dados de '${dataUrl}':`, error);
        return of([]);
      })
    );
  }
}