import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatabaseService } from '../../services/database.service'; // Importe o novo serviço
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone: true, // Garanta que o header é standalone
  imports: [AsyncPipe, RouterLink], // Adicione os imports necessários
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly databaseService = inject(DatabaseService);

  // Expõe a lista de matérias para o template
  protected readonly materias$ = this.databaseService.getMaterias();
}