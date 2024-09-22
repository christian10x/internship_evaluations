package com.trainee.backend.infraestructure.repository;

import com.trainee.backend.infraestructure.entity.Pago;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagoRepository extends JpaRepository<Pago, Integer> {
}
