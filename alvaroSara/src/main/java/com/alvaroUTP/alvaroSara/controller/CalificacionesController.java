package com.alvaroUTP.alvaroSara.controller;


import com.alvaroUTP.alvaroSara.entity.Calificacion;
import com.alvaroUTP.alvaroSara.entity.Nota;
import com.alvaroUTP.alvaroSara.repository.CalificacionRepository;
import com.alvaroUTP.alvaroSara.service.IBusinessLogic;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/calificaciones")
@RequiredArgsConstructor
public class CalificacionesController {

    @Autowired
    public IBusinessLogic iBusinessLogic;


    @GetMapping(value = "") // http//:localhost:8080/api/test
    public List<Calificacion> listaCalificaciones(){
        return iBusinessLogic.listCalificaciones();
    }


    @GetMapping(value = "curso/{id}") // http//:localhost:8080/api/test
    public List<Calificacion> listaCalificacionesPorCurso(@PathVariable(value = "id") String id){
        return iBusinessLogic.listCalificacionesByCurso(id);
    }

    @GetMapping(value = "seccion/{id}") // http//:localhost:8080/api/test
    public List<Calificacion> listaCalificacionesPorSeccion(@PathVariable(value = "id") String id){
        return iBusinessLogic.listCalificacionesBySeccion(id);
    }

    @PostMapping(value ="notas/" )
    public void crearNotas(@RequestBody Nota nota){
        iBusinessLogic.crearCalificacion(nota.getNota(),nota.getId_curso(),nota.getId_seccion(),nota.getId_alumno(),nota.getId_evaluacion());
    }

}
