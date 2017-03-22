import { VeiculoComponent } from './veiculo.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {path: 'veiculos', component: VeiculoComponent},
]);
