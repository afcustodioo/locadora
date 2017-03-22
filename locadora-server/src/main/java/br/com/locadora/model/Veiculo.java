package br.com.locadora.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Veiculo {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private Integer ano;

	private String modelo;
	
	private String placa;
	
	private String cor;

}
