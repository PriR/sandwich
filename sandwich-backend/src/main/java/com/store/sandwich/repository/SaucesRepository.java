package com.store.sandwich.repository;

import com.store.sandwich.dtos.Sauces;
import com.store.sandwich.dtos.Toppings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaucesRepository extends JpaRepository<Sauces, Integer> {
}
