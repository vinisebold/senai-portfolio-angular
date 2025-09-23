import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import type { MateriaInfo } from '../models/materia.model';

interface Database {
  materias: MateriaInfo[];
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private readonly http = inject(HttpClient);
  private dataUrl = 'assets/database.json';

  // Busca a lista de todas as matérias
  getMaterias() {
    return this.http.get<Database>(this.dataUrl).pipe(
      map(database => database.materias || [])
    );
  }
}