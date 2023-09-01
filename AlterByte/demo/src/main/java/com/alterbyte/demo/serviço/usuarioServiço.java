package com.alterbyte.demo.serviço;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.alterbyte.demo.modelo.repostaModelo;
import com.alterbyte.demo.modelo.usuarioModelo;
import com.alterbyte.demo.repositorio.usuarioRepositorio;

@Service
public class usuarioServiço {

    @Autowired
    private usuarioRepositorio ur;

    @Autowired
    private repostaModelo rm;

    //listar produtos
    public Iterable<usuarioModelo> listar(){
        return ur.findAll();
    }

     //listar produtos únicos
    public Optional<usuarioModelo> listarUm(long codigo){
        return ur.findById(codigo);
    }

    //cadastrar ou alterar usuarios
    public ResponseEntity<?> cadastrarAlterar(usuarioModelo pm, String acao){
        if(pm.getNome().equals("")){
            rm.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<repostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(pm.getEmail().equals("")){
            rm.setMensagem("O campo do e-mail é obrigatório!");
            return new ResponseEntity<repostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<usuarioModelo>(ur.save(pm), HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<usuarioModelo>(ur.save(pm), HttpStatus.OK);
            }
        }

    }
    
     //remover Usuarios
     public ResponseEntity<repostaModelo> remover(long codigo){
        ur.deleteById(codigo);
        rm.setMensagem("Usuário removido com sucesso");
        return new ResponseEntity<repostaModelo>(rm, HttpStatus.OK);
     }

    
}
