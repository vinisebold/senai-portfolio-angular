import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardService } from '../../shared/services/card.service';
import { DatabaseService } from '../../shared/services/database.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface RecentProject {
  id: string;
  tema: string;
  descricao: string;
  materia: string;
  trimestre: number;
  image: string;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private cardService = inject(CardService);
  private databaseService = inject(DatabaseService);
  
  recentProjects: RecentProject[] = [];

  ngOnInit(): void {
    this.loadRecentProjects();
  }

  private loadRecentProjects(): void {
    // Busca os projetos mais recentes de cada matéria
    this.databaseService.getMaterias().subscribe(materias => {
      const requests = materias.map(materia => {
        // Busca do trimestre 2 (mais recente)
        return this.cardService.getCards(materia.id, 2).pipe(
          map(cards => 
            cards.slice(0, 2).map(card => ({
              ...card,
              materia: materia.nome,
              trimestre: 2,
              image: card.imagens[0] || 'assets/images/placeholder.svg',
              route: `/materia/${materia.id}/2`
            }))
          )
        );
      });

      forkJoin(requests).subscribe(results => {
        // Achata o array de arrays e pega os 6 mais recentes
        this.recentProjects = results
          .flat()
          .slice(0, 6);
      });
    });
  }
}
