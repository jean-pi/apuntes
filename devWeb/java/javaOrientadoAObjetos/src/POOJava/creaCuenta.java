package POOJava;

public class creaCuenta {

	public static void main(String[] args) {
		Cuenta cuentaUser1 = new Cuenta(10);
		System.out.println(cuentaUser1.getAgencia());
		cuentaUser1.depositar(150.50);
		cuentaUser1.setId(768547);
		cuentaUser1.setAgencia(3);
		cuentaUser1.getTitular().setNombre("Jean Pierre Veliz Lavayen");
		cuentaUser1.getTitular().setCelular(3748592);
		cuentaUser1.getTitular().setCedula(1250743208);
		cuentaUser1.getTitular().setSexo("men");
		System.out.println(cuentaUser1.getTitular().getNombre());
		System.out.println(cuentaUser1.getAgencia());
		// este objeto tienes dos formas de asignar la "agencia"
		// con getAgencia: no se pueden hacer validacioneas al crear la instacia de la clase
		// y es como obcional colocarle una "agencia"
		// con Constructor personalizado: me obliga a ingresar un valor al momento de instaciar la clases
		// entoces lo puedo validar en ese mismo instante y mandar un error automaticamamente


		Cuenta cuentaUser2 = new Cuenta(11);
		System.out.println(cuentaUser2.getAgencia());
		cuentaUser2.depositar(300.50);
		cuentaUser2.setId(4758493);
		cuentaUser2.setAgencia(1);
		cuentaUser2.getTitular().setNombre("Maria Veliz");
		cuentaUser2.getTitular().setCelular(57438399);
		cuentaUser2.getTitular().setCedula(1250743205);
		cuentaUser2.getTitular().setSexo("women");
		System.out.println(cuentaUser2.getTitular().getNombre());
		System.out.println(cuentaUser2.getAgencia());

	}

}
