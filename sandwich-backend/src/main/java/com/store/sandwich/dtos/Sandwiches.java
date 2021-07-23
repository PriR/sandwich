package com.store.sandwich.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="sandwiches")
@Setter
@Getter
@ToString
public class Sandwiches {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name="bread_type")
    private String breadType;
    @Column(name="bread_size")
    private String breadSize;
    private String vegetables; // string json list
    private String sauces; // string json list
    private String toppings; // string json list

}
