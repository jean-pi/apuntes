package POOJava;

public class metodos {

	public static void main(String[] args) {
		// Palabra resarvada
		// void: significa que no se retona ningun valor
		
		Cuenta cuentaDeJean = new Cuenta(5);
		cuentaDeJean.depositar(100.10);
		cuentaDeJean.depositar(200.10);
		System.out.println(cuentaDeJean.getSaldo());
		cuentaDeJean.retirar(50);
		System.out.println(cuentaDeJean.getSaldo());
		
		
		Cuenta cuentaDeMaria = new Cuenta(5);
		cuentaDeMaria.depositar(1000.10);
		System.out.println(cuentaDeMaria.getSaldo());
		boolean resultadoTransferencia = cuentaDeMaria.transferir(500, cuentaDeJean);
		if(resultadoTransferencia) {
			System.out.println("se realizo con exito la transferencia");
		}
		System.out.println(cuentaDeJean);
		System.out.println(cuentaDeMaria.getSaldo());
		System.out.println(cuentaDeJean.getSaldo());
		
	}
}
