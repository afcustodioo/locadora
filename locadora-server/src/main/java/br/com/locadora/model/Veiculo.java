package br.com.locadora.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Veiculo {
	
	@Id
	private Long id;
	
	private String placa;

}
