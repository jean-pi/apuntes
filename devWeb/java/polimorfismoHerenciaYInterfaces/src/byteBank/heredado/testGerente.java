package byteBank.heredado;

public class testGerente {

	public static void main(String[] argrs) {
		
		Gerente pierre = new Gerente();
		pierre.setSalario(500);
		pierre.setCedula("1258685948");
		pierre.setNombre("pierre pierre");
		System.out.println(pierre.getBonificacion());
		pierre.setClave("clave1234");
		
		
		
		sistemaInterno sistemaInterno = new sistemaInterno();
		sistemaInterno.setClave("clave1234");
		System.out.println(sistemaInterno.autentica(pierre));

		
	}

}
