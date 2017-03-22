package br.com.locadora.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.locadora.model.Veiculo;

@RequestMapping("/api/veiculos")
public interface VeiculoRepository extends CrudRepository<Veiculo, Long> {

}
