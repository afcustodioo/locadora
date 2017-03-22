import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-veiculo-component',
  templateUrl: 'veiculo.component.html',
  styleUrls: ['veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private http: Http) {
  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  save(body: any): void {

    if (!body['id']) {
      delete body['id'];
    }

    this.http.post('http://localhost:8080/veiculoes/', body).subscribe(salvo => {
      console.log(salvo);
    })
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      'id': [''],
      'ano': ['', Validators.required],
      'modelo': ['', Validators.required],
      'placa': ['', Validators.required],
      'cor': ['', Validators.required],
    });
  }
}
