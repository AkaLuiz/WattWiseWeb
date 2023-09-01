package com.alterbyte.demo.repositorio;

import org.springframework.data.repository.CrudRepository;
import com.alterbyte.demo.modelo.usuarioModelo;


public interface usuarioRepositorio extends CrudRepository<usuarioModelo, Long>{
    
}
