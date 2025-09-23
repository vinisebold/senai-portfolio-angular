import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(c => c.Home),
    pathMatch: 'full'
  },
  {
    // A ROTA MÁGICA!
    // Ela captura o ID da matéria e o número do trimestre da URL.
    path: ':materiaId/:trimestreNum',
    loadComponent: () => import('./pages/trimestre-page/trimestre-page').then(c => c.TrimestrePage)
  },
  {
    path: '**', // Rota para "Página não encontrada"
    redirectTo: ''
  }
];
