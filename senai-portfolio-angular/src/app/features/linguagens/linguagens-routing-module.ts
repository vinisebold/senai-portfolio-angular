import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lin1 } from './lin-1/tri-1';
import { Lin2 } from './lin-2/tri-2';
import { Lin3 } from './lin-3/tri-3';

const routes: Routes = [
  { path: 'trimestre-1', component: Lin1 },
  { path: 'trimestre-2', component: Lin2 },
  { path: 'trimestre-3', component: Lin3 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinguagensRoutingModule { }
