package com.backend.controller;

import com.backend.service.ConflictoException;
import com.backend.service.DatosIncorrectosException;
import com.backend.service.NoEncontradoException;
import com.backend.util.Jsons;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalExceptionHandler {

    private final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(NoEncontradoException.class)
    public ResponseEntity<?> handleNoEncontradoException(NoEncontradoException ex) {

        String mensajeError = ex.getMessage();

        logger.error(mensajeError);

        return new ResponseEntity<>(Jsons.asJsonString(mensajeError), HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(ConflictoException.class)
    public ResponseEntity<?> handleConflictoException(ConflictoException ex) {

        String mensajeError = ex.getMessage();

        logger.error(mensajeError);

        return new ResponseEntity<>(Jsons.asJsonString(mensajeError), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(DatosIncorrectosException.class)
    public ResponseEntity<?> handleDatosIncorrectosException(DatosIncorrectosException ex) {

        String mensajeError = ex.getMessage();

        logger.error(mensajeError);

        return new ResponseEntity<>(Jsons.asJsonString(mensajeError), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(java.time.format.DateTimeParseException.class)
    public ResponseEntity<?> handleDateTimeParseException(java.time.format.DateTimeParseException ex) {

        String mensajeError = ex.getMessage();

        logger.error(mensajeError);

        return new ResponseEntity<>(Jsons.asJsonString(mensajeError), HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<?> handleAuthenticationException(AuthenticationException ex) {

        String mensajeError = "Credenciales incorrectas";

        logger.error(mensajeError);

        return new ResponseEntity<>(Jsons.asJsonString(mensajeError), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception ex) {

        String mensajeError = ex.getMessage();

        logger.error(mensajeError);

        return new ResponseEntity<>(Jsons.asJsonString(mensajeError), HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
