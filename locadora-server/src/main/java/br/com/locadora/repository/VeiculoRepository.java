package br.com.locadora.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.locadora.model.Veiculo;

@CrossOrigin
public interface VeiculoRepository extends PagingAndSortingRepository<Veiculo, Long> {

}
