package byteBank.heredado;

public abstract class Funcionario {
	// funcionario es una clse abstracta ya que 
	// no representa un elemento del mundo real
	// todos los que trabajan el la empresa son funionarios
	
	private String nombre;
	private String cedula;
	private double salario;
	
	public Funcionario() {
		
		
	}
	
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}

	public abstract double getBonificacion();
	// metodo abstracto 
	// cuando se extienda esta clase los hijos tendran que 
	// sobre escribir los metodos abstractos obligadamente.

}
