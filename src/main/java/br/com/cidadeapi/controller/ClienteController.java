package br.com.cidadeapi.controller;

import br.com.cidadeapi.entities.Cliente;
import br.com.cidadeapi.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "*") //no angular será a porta 4200
public class ClienteController {

    private ClienteRepository repository;

    @Autowired
    public ClienteController(ClienteRepository repository) {
        this.repository = repository;
    }

    @PostMapping(value = "/")
    public Cliente cadastrar(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    //    @GetMapping(value = "/")
//    public String helloWorld() {
//        return "Hello World.";
//    }
    @GetMapping(value = "/")
    public ResponseEntity<List<Cliente>> listar() {
        return ResponseEntity.ok().body(repository.findAll());
    }

    @PutMapping(value = "/")
    public Cliente editar(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @DeleteMapping(value = "/{id}")
    public void remover(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> listarPorId(@PathVariable Long id) {
        return ResponseEntity.ok().body(repository.findAllById(Collections.singleton(id)));
    }
}
