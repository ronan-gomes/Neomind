package com.neomind.restapi.controller;

import com.neomind.restapi.model.Supplier;
import com.neomind.restapi.repositorio.SupplierRepositorio;

import jakarta.annotation.PostConstruct;
import jakarta.websocket.server.PathParam;

import java.util.List;
import java.util.Optional;

import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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

    @PutMapping("/{id}")
    public Supplier alterar(@RequestBody Supplier supplier){
        if(supplier.getId()>0)
            return repositorio.save(supplier);
        return null;
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
}
