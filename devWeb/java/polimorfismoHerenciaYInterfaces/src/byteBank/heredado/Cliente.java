package byteBank.heredado;

public class Cliente implements Autenticable{
	private String nombre;
	private String sexo;
	private int cedula;
	private int celular;
	private String clave;
	
	//IMPORTANT
	// ir a Source/generate getters and setters 
	// se generan automaticamente
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public int getCedula() {
		return cedula;
	}
	public void setCedula(int cedula) {
		this.cedula = cedula;
	}
	public int getCelular() {
		return celular;
	}
	public void setCelular(int celular) {
		this.celular = celular;
	}
	
	
	@Override
	public boolean iniciarSesion(String clave) {
		// TODO Auto-generated method stub
		return clave == this.clave;
	}
	@Override
	public void setClave(String clave) {
		// TODO Auto-generated method stub
		this.clave = clave;
	}
	

}
