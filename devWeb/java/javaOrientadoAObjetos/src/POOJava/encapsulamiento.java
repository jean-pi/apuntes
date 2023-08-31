package POOJava;

public class encapsulamiento {

	public static void main(String[] args) {
		//Modificadores de acceso PUBLIC , PRIVATE
		Cuenta cuenta = new Cuenta(5);
		
		//cuentaSaldoPrivate.saldoPrivado = 100.05; error variables privada
		cuenta.depositar(500.05);
		cuenta.depositar(150.05);
		System.out.println(cuenta.getSaldo());
	
		cuenta.setAgencia(5);
		System.out.println(cuenta.getAgencia());
	}

}
