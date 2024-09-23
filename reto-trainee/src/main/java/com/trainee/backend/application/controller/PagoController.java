package com.trainee.backend.application.controller;

import com.trainee.backend.domain.dto.PagoDto;
import com.trainee.backend.domain.request.PagoRequest;
import com.trainee.backend.domain.service.PagoService;
import com.trainee.backend.domain.wrapper.PagoWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/pagos")
@RequiredArgsConstructor
public class PagoController {

    private final PagoService pagoService;

    @PostMapping("/registrar-pago")
    public ResponseEntity<?> registrarPago(@RequestBody List<PagoRequest> newPago) {
        Map<String, Map<String, String>> errores = new HashMap<>();

        // Verificar cada pago
        for (int i = 0; i < newPago.size(); i++) {
            Map<String, String> listaDeErrores = pagoService.verificarPago(newPago.get(i));
            if (!listaDeErrores.isEmpty()) {
                errores.put("pago " + (i+1) , listaDeErrores);
            }
        }

        // Si hay errores, retornar el HashMap con los errores
        if (!errores.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errores);
        }

        // Si no hay errores, proceder con el registro
        for (PagoRequest p : newPago) {
            pagoService.registrarPago(p);
        }

        return ResponseEntity.ok().body("Registro exitoso");
    }

    @GetMapping(value = "/all", produces = { "application/json", "application/xml" })
    public ResponseEntity<PagoWrapper> listarPagos() {
        List<PagoDto> pagos = pagoService.listarPagos();
        PagoWrapper pagosWrapper = new PagoWrapper();
        pagosWrapper.setPago(pagos);

        return ResponseEntity.ok(pagosWrapper);
    }

    //listado de pagos pendientes
    @GetMapping(value = "/pendientes", produces = { "application/json", "application/xml" })
    public ResponseEntity<PagoWrapper> listarPagosPendientes(){
        List<PagoDto> pagosPendientes = pagoService.listarPagosPendientes();
        PagoWrapper pagoWrapper = new PagoWrapper();
        pagoWrapper.setPago(pagosPendientes);

        return  ResponseEntity.ok(pagoWrapper);
    }
}
