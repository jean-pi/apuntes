package byteBank.heredado;

public class testCuenta {

	public static void main(String[] argrs) {
		CuentaCorriente cc = new CuentaCorriente(5);
		CuentaDeAhorros ca = new CuentaDeAhorros(3);
		
		cc.depositar(500);
		cc.transferir(250, ca);
		
		System.out.println(cc.getSaldo());
		System.out.println(ca.getSaldo());
		
		
	}
}
