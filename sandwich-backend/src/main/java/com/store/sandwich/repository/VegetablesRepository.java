package com.store.sandwich.repository;

import com.store.sandwich.dtos.Toppings;
import com.store.sandwich.dtos.Vegetables;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VegetablesRepository extends JpaRepository<Vegetables, Integer> {
}
