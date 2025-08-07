import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ch1 } from './ch-1/tri-1';
import { Ch2 } from './ch-2/tri-2';
import { Ch3 } from './ch-3/tri-3';

const routes: Routes = [
  { path: 'trimestre-1', component: Ch1 },
  { path: 'trimestre-2', component: Ch2 },
  { path: 'trimestre-3', component: Ch3 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CienciasHumanasRoutingModule {

}
