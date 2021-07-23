package com.store.sandwich.repository;

import com.store.sandwich.dtos.Sandwiches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SandwichesRepository extends JpaRepository<Sandwiches, Long> {

}
