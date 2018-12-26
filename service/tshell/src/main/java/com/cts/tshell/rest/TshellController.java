package com.cts.tshell.rest;

public class TshellController  {

	/*private static final Logger LOGGER = LoggerFactory.getLogger(TshellController.class);


	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleError(Exception ex) {
		LOGGER.info("start");
		ErrorResponse error = new ErrorResponse();
		error.setTimestamp(ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT));
		LOGGER.debug("error : {} ", error);
		error.setReasonCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
	    error.setErrorMessage("Internal Server Error");
		return new ResponseEntity<ErrorResponse>(error, HttpStatus.INTERNAL_SERVER_ERROR);
	}*/
}
