package com.neomind.restapi.controller;

import com.neomind.restapi.model.Supplier;
import com.neomind.restapi.repositorio.SupplierRepositorio;

import jakarta.annotation.PostConstruct;
import jakarta.websocket.server.PathParam;

import java.util.List;
import java.util.Optional;

import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/suppliers")
public class SupplierController {

    @Autowired
    private SupplierRepositorio repositorio;
    
    @GetMapping
    public List<Supplier> listar(){
        return repositorio.findAll();
    }

    @GetMapping("/{id}")
        public Optional<Supplier> getUser(@PathVariable Integer id) {
       return repositorio.findById(id);
    }

    @DeleteMapping
    public String delete(@RequestBody Supplier supplier){
        if(supplier.getId()>0){
            repositorio.delete(supplier);
            return "Excluído com sucesso!";
        }
        return "Não encontrado!";
    }

    @PostMapping
    public Supplier adicionar(@RequestBody Supplier supplier){
        return repositorio.save(supplier);
    }

    @PutMapping("/{id}")
    public ResponseEntity <Supplier> alterar(@PathVariable Integer id, 
            @RequestBody Supplier supplier) {
        return repositorio.findById(id)
            .map(recordFound ->{
            recordFound.setName(null);
            recordFound.setEmail(null);
            recordFound.setComment(null);
            recordFound.setCnpj(null);
            Supplier updated = repositorio.save(recordFound);
            return ResponseEntity.ok().body(updated);
        })
        .orElse(ResponseEntity.notFound().build());
        // return null;
    }
}
