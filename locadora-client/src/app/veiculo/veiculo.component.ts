import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Veiculo } from './veiculo.type';

@Component({
  selector: 'app-veiculo-component',
  templateUrl: 'veiculo.component.html',
  styleUrls: ['veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  form: FormGroup;

  veiculos: Veiculo[] = [];

  ENDPOINT: string = 'http://localhost:8080/veiculos/';

  constructor(public formBuilder: FormBuilder, private http: Http) {
  }

  ngOnInit(): void {
    this.form = this.createForm();
    this.loadTable();
  }

  save(body: any): void {

    if (!body['id']) {
      delete body['id'];
    }

    this.http.post(this.ENDPOINT, body).subscribe(salvo => {
      this.veiculos.push(this.convertToVeiculo(salvo.json()))
    })
  }

  loadTable(): void {
    this.http.get(this.ENDPOINT).subscribe((data: any) => {
      data.json()._embedded.veiculoes.forEach(veiculo => {
        this.veiculos.push(this.convertToVeiculo(veiculo));
      });
    });
  }

  private convertToVeiculo(veiculoObj: any): Veiculo {

    return <Veiculo> ({
      ano: veiculoObj.ano,
      modelo: veiculoObj.modelo,
      placa: veiculoObj.placa,
      cor: veiculoObj.cor
    });

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
