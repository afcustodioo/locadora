import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'veiculos', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
