CREATE TABLE Alumno
(
  alumno INT,
  PRIMARY KEY (alumno)
);

CREATE TABLE Pregunta
(
  pregunta VARCHAR(255),  
  peso INT,
  PRIMARY KEY (pregunta)
);

CREATE TABLE Evaluador
(
  evaluador INT,
  PRIMARY KEY (evaluador)
);

CREATE TABLE Evaluacion
(
  evaluacion INT,
  nota_aprobatoria INT,
  PRIMARY KEY (evaluacion)
);

CREATE TABLE Evaluacion_Pregunta
(
  evaluacion INT,
  pregunta VARCHAR(255),  
  PRIMARY KEY (evaluacion, pregunta)
  -- FOREIGN KEY (evaluacion) REFERENCES Evaluacion(evaluacion),
  -- FOREIGN KEY (pregunta) REFERENCES Pregunta(pregunta)
);

CREATE TABLE Evaluacion_Alumno
(
  nota INT,
  alumno INT,
  evaluacion INT,
  PRIMARY KEY (alumno, evaluacion)
  -- FOREIGN KEY (alumno) REFERENCES Alumno(alumno),
  -- FOREIGN KEY (evaluacion) REFERENCES Evaluacion(evaluacion)
);

CREATE TABLE Respuesta
(
  alumno INT,
  evaluacion INT,
  pregunta VARCHAR(255),
  respuesta VARCHAR(255), 
  calificacion INT,
  PRIMARY KEY (alumno, evaluacion, pregunta)
  -- FOREIGN KEY (alumno, evaluacion) REFERENCES Evaluacion_Alumno(alumno, evaluacion),
  -- FOREIGN KEY (pregunta) REFERENCES Pregunta(pregunta)
);

CREATE TABLE Evaluador_Evaluacion
(
  validacion INT,
  evaluador INT,
  evaluacion INT,
  PRIMARY KEY (evaluador, evaluacion)
  -- FOREIGN KEY (evaluador) REFERENCES Evaluador(evaluador),
  -- FOREIGN KEY (evaluacion) REFERENCES Evaluacion(evaluacion)
);


-- INSERCIONES INICIALES
INSERT INTO ALUMNO(alumno) VALUES (101020); 

INSERT INTO PREGUNTA(pregunta, peso) VALUES ('pregunta_1',1);
INSERT INTO PREGUNTA(pregunta, peso) VALUES ('pregunta_2',2); 
INSERT INTO PREGUNTA(pregunta, peso) VALUES ('pregunta_3',3); 
INSERT INTO PREGUNTA(pregunta, peso) VALUES ('pregunta_4',4); 
INSERT INTO PREGUNTA(pregunta, peso) VALUES ('pregunta_5',5); 

INSERT INTO EVALUADOR(evaluador) VALUES (1); 
INSERT INTO EVALUADOR(evaluador) VALUES (2); 

INSERT INTO EVALUACION(evaluacion, nota_aprobatoria) VALUES (20200033,11); 

INSERT INTO EVALUACION_PREGUNTA(evaluacion, pregunta) VALUES (20200033,'pregunta_1');
INSERT INTO EVALUACION_PREGUNTA(evaluacion, pregunta) VALUES (20200033,'pregunta_2'); 
INSERT INTO EVALUACION_PREGUNTA(evaluacion, pregunta) VALUES (20200033,'pregunta_3'); 
INSERT INTO EVALUACION_PREGUNTA(evaluacion, pregunta) VALUES (20200033,'pregunta_4'); 
INSERT INTO EVALUACION_PREGUNTA(evaluacion, pregunta) VALUES (20200033,'pregunta_5'); 

INSERT INTO EVALUACION_ALUMNO(nota, alumno, evaluacion) VALUES (0,101020,20200033);

INSERT INTO EVALUADOR_EVALUACION(validacion, evaluador, evaluacion) VALUES (1,1,20200033);
INSERT INTO EVALUADOR_EVALUACION(validacion, evaluador, evaluacion) VALUES (0,2,20200033);

CREATE OR REPLACE FUNCTION actualizar_nota_alumno() 
RETURNS TRIGGER AS $$
DECLARE
    suma_pesos NUMERIC;
BEGIN
    -- Calculamos la sumatoria de los pesos asociados a las preguntas de la evaluación
    SELECT COALESCE(SUM(peso), 0)
    INTO suma_pesos
    FROM Evaluacion_Pregunta
    WHERE evaluacion = NEW.evaluacion;

    -- Actualizamos la columna 'nota' en Evaluacion_Alumno con la suma de (calificación * peso) dividido entre la sumatoria de los pesos
    UPDATE Evaluacion_Alumno
    SET nota = (
        SELECT COALESCE(SUM(r.calificacion * p.peso), 0)  -- Multiplicamos calificación * peso
        FROM Respuesta r
        JOIN Pregunta p ON r.pregunta = p.pregunta  -- Unimos Respuesta con Pregunta por el campo 'pregunta'
        WHERE r.alumno = NEW.alumno
        AND r.evaluacion = NEW.evaluacion
    ) / suma_pesos  -- Dividimos entre la sumatoria de los pesos
    WHERE alumno = NEW.alumno
    AND evaluacion = NEW.evaluacion;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_nota
AFTER INSERT OR UPDATE ON Respuesta
FOR EACH ROW
EXECUTE PROCEDURE actualizar_nota_alumno();




