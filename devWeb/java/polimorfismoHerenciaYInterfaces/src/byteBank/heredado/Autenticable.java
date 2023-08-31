package byteBank.heredado;

public interface Autenticable{
	// con las interfaces se puede como agregar dos clases , esto facilita la arquitectura de las clases en mi programa
	// todas las interfaces son abstractas 
	// todos los metodos de una interfaz son abstractas
	
	public void setClave(String clave);
		//this.clave = clave;
	
	public boolean iniciarSesion(String clave);
	//return clave == this.clave;
	
}
