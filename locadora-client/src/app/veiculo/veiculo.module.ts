import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VeiculoComponent } from './veiculo.component';
import { routing } from './veiculo.routing';

@NgModule({
  imports: [
    SharedModule, routing
  ],
  declarations: [VeiculoComponent]
})
export class VeiculoModule { }
