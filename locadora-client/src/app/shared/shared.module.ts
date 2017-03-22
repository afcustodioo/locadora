import { NgModule, ModuleWithProviders } from '@angular/core/';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
