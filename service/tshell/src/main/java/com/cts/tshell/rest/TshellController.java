package com.cts.tshell.rest;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cts.tshell.bean.ErrorResponse;

public class TshellController {

	private static final Logger LOGGER = LoggerFactory.getLogger(TshellController.class);

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleError(Exception ex){
		LOGGER.info("start");
<<<<<<< HEAD
=======
		LOGGER.error(ex.getMessage(), ex);
>>>>>>> top-5-accessed-tests-service
		ErrorResponse error = new ErrorResponse();
		error.setTimestamp(ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT));
		LOGGER.debug("error : {} ", error);
		error.setReasonCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
<<<<<<< HEAD
		//error.setErrorMessage(ex.getMessage());
		error.setErrorMessage("System Error");
=======
		error.setErrorMessage(ex.getMessage());
>>>>>>> top-5-accessed-tests-service
		return new ResponseEntity<ErrorResponse>(error, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
