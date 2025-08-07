import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path: 'ciencias-humanas',
        loadChildren: () => import('./features/ciencias-humanas/ciencias-humanas-module').then(m => m.CienciasHumanasModule)
    },
    {
        path: 'ciencias-natureza',
        loadChildren: () => import('./features/ciencias-natureza/ciencias-natureza-module').then(m => m.CienciasNaturezaModule)
    },
    {
        path: 'linguagens',
        loadChildren: () => import('./features/linguagens/linguagens-module').then(m => m.LinguagensModule)
    },
    {
        path: 'matematica',
        loadChildren: () => import('./features/matematica/matematica-module').then(m => m.MatematicaModule)
    },
    { path: '**', component: Home }
];
