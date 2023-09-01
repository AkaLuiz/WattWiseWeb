package com.alterbyte.demo.controle;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.alterbyte.demo.modelo.produtoModelo;
import com.alterbyte.demo.modelo.repostaModelo;
import com.alterbyte.demo.modelo.usuarioModelo;
import com.alterbyte.demo.serviço.produtoServiço;
import com.alterbyte.demo.serviço.usuarioServiço;

@RestController
@CrossOrigin(origins = "*")
public class produtoControle {

    @Autowired
    private produtoServiço ps;

    @Autowired
    private usuarioServiço us;

    @GetMapping("/listar")
    public Iterable<produtoModelo> listar(){
        return ps.listar();
    }

    @GetMapping("/listar/{codigo}")
    public Optional<produtoModelo> listarUm(@PathVariable long codigo){
        return ps.listarUm(codigo);
    }
    
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody produtoModelo pm){
        return ps.cadastrarAlterar(pm,"cadastrar");
    }
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody produtoModelo pm){
        return ps.cadastrarAlterar(pm,"alterar");
    }

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<repostaModelo> remover(@PathVariable long codigo){
        return ps.remover(codigo);
    }

    @GetMapping("/listar/usuarios")
    public Iterable<usuarioModelo> listarU(){
        return us.listar();
    }

    @GetMapping("/listar/usuarios/{codigo}")
    public Optional<usuarioModelo> listarUmU(@PathVariable long codigo){
        return us.listarUm(codigo);
    }
    
    @PostMapping("/cadastrar/usuarios")
    public ResponseEntity<?> cadastrar(@RequestBody usuarioModelo pm){
        return us.cadastrarAlterar(pm,"cadastrar");
    }
    @PutMapping("/alterar/usuarios")
    public ResponseEntity<?> alterar(@RequestBody usuarioModelo pm){
        return us.cadastrarAlterar(pm,"alterar");
    }

    @DeleteMapping("/remover/usuarios/{codigo}")
    public ResponseEntity<repostaModelo> removerU(@PathVariable long codigo){
        return us.remover(codigo);
    }

    @GetMapping("/")
    public String rota(){
        return "Api de produtos funcionando";
    }

}
