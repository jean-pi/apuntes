package byteBank.heredado;

public class Administrador extends Funcionario implements Autenticable{

	private String clave;
	
	
	@Override
	public double getBonificacion() {
		// TODO Auto-generated method stub
		// metodo abstracto heredado de clase Abstracta Funcionario;
		return super.getSalario();
	}

	@Override
	public boolean iniciarSesion(String clave) {
		// TODO Auto-generated method stub
		return this.clave == clave;
		// metodo abstracto heredado de interfaz Autentica;
	}

	@Override
	public void setClave(String clave) {
		// TODO Auto-generated method stub
		// metodo abstracto heredado de interfaz Autentica;
		this.clave = clave;
	}



}
