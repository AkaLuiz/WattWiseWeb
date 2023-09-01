package com.alterbyte.demo.repositorio;

import org.springframework.data.repository.CrudRepository;
import com.alterbyte.demo.modelo.produtoModelo;


public interface produtoRepositorio extends CrudRepository<produtoModelo, Long>{
    
}
