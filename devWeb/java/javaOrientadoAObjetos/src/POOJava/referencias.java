package POOJava;

public class referencias {

	public static void main(String[] args) {
		
		Cuenta cuentaUser3 = new Cuenta(5);
		cuentaUser3.depositar(50.05);
		Cuenta cuentaUser4 = cuentaUser3; // pasan a ser instacias de la clase iguales copias idemticas
		cuentaUser4.depositar(100.05);
		
		//java no guarda la new class en una variable
		//crea un identificador unico y eso es que guarda
		System.out.println(cuentaUser3);// mismo id
		System.out.println(cuentaUser4);// mismo id
		
		Cuenta user5 = new Cuenta(5);
		user5.depositar(1000.05);
		System.out.println(user5);
		// se puede ver en consola ese identificador unico
	}
}
