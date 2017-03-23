package br.com.locadora.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.locadora.model.Veiculo;

@CrossOrigin
@RepositoryRestResource(path = "veiculos")
public interface VeiculoRepository extends PagingAndSortingRepository<Veiculo, Long> {

}
