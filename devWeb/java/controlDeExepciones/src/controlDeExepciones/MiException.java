package controlDeExepciones;

public class MiException  extends RuntimeException{
	// creo mi propio tipo de error
	// todos las exepciones extienten de el objeto "RuntimeException"
	// yo puedo hacer lo mismo y crear un error 
	
	public MiException() {
		super(); // llama al constructor del la clase padre
	}
	public MiException(String message) {
		super(message);
	}
}
