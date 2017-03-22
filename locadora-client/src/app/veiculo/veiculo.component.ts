import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculo-component',
  templateUrl: 'veiculo.component.html',
  styleUrls: ['veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      'id': [''],
      'placa': ['', Validators.required]
    });
  }
}
