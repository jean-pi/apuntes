package byteBank.heredado;

public class sistemaInterno {

	private String clave = "clave1234";
	
	public void setClave(String clave) {
		this.clave = clave;
	}
	
	public boolean autentica(Autenticable Autenticable) {
		boolean puedeIniciarSesion = Autenticable.iniciarSesion(clave);
		if(puedeIniciarSesion) {
			System.out.println("inicio exitoso");
			return true;
		}else {
			System.out.println("error de incio");
			return false;
		}
	}

}
