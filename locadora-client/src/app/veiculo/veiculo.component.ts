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

    this.http.post('http://localhost:8080/veiculos/', body).subscribe(salvo => {
      console.log(salvo);
    })
  }

  loadTable(): void {
    this.http.get('http://localhost:8080/veiculos/').subscribe((data: any) => {

      data.json()._embedded.veiculoes.forEach(veiculo => {
        this.veiculos.push(this.toVeiculo(veiculo));
      });

    });
  }

  private toVeiculo(obj:any): Veiculo {
    let v: Veiculo = <Veiculo> ({
      ano: obj.ano,
      modelo: obj.modelo,
      placa: obj.placa,
      cor: obj.cor
    });

    console.log('convertido', v);

    return v;
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
