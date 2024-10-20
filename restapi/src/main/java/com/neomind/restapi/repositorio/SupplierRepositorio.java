package com.neomind.restapi.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neomind.restapi.model.Supplier;

public interface SupplierRepositorio extends JpaRepository<Supplier, Integer>{
    
}
