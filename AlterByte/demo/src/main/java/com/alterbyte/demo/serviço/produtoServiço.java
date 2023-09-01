package com.alterbyte.demo.serviço;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.alterbyte.demo.modelo.produtoModelo;
import com.alterbyte.demo.modelo.repostaModelo;
import com.alterbyte.demo.repositorio.produtoRepositorio;

@Service
public class produtoServiço {

    @Autowired
    private produtoRepositorio pr;

    @Autowired
    private repostaModelo rm;

    //listar produtos
    public Iterable<produtoModelo> listar(){
        return pr.findAll();
    }

     //listar produtos únicos
    public Optional<produtoModelo> listarUm(long codigo){
        return pr.findById(codigo);
    }

    //cadastrar ou alterar produtos
    public ResponseEntity<?> cadastrarAlterar(produtoModelo pm, String acao){
        if(pm.getNome().equals("")){
            rm.setMensagem("O nome do produto é obrigatório!");
            return new ResponseEntity<repostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(pm.getWatts() == 0){
            rm.setMensagem("Preencha a potência, os Watts!");
            return new ResponseEntity<repostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(pm.getHorasDia() == 0){
            rm.setMensagem("Preencha a quantidade de dias por hora!");
            return new ResponseEntity<repostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(pm.getDias() == 0){
            rm.setMensagem("Preencha a quantidade de dias!");
            return new ResponseEntity<repostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<produtoModelo>(pr.save(pm), HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<produtoModelo>(pr.save(pm), HttpStatus.OK);
            }
        }

    }
    
     //remover produtos
     public ResponseEntity<repostaModelo> remover(long codigo){
        pr.deleteById(codigo);
        rm.setMensagem("Produto removido com sucesso");
        return new ResponseEntity<repostaModelo>(rm, HttpStatus.OK);
     }
    
}
