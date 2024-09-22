package com.trainee.backend.domain.service;

import com.trainee.backend.domain.dto.PagoDto;
import com.trainee.backend.domain.request.PagoRequest;
import com.trainee.backend.infraestructure.entity.Pago;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface PagoService {
    List<PagoDto> listarPagos();
    Optional<Pago> registrarPago(PagoRequest newPago);
    Map<String, String> verificarPago(PagoRequest newPago);
    List<PagoDto> listarPagosPendientes();
}
