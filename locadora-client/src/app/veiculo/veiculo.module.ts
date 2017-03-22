import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VeiculoComponent } from './veiculo.component';
import { routing } from './veiculo.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    SharedModule, routing, HttpModule
  ],
  declarations: [VeiculoComponent]
})
export class VeiculoModule { }
