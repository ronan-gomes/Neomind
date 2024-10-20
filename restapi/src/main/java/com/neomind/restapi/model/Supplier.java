package com.neomind.restapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Supplier {

    @Id //identifica como chave primária do banco
    @GeneratedValue(strategy = GenerationType.IDENTITY) //AutoIncremento
    private Integer id;
    
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;
    private String comment;

    @Column(nullable = false)
    private String cnpj;

    //getters
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public String getComment() {
        return comment;
    }
    public String getCnpj() {
        return cnpj;
    }

    //setters
    public void setId(Integer id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    
    
    

}
