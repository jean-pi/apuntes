package byteBank.heredado;

public class POLIMORFISMOesAbstracto {
	
	public static void main(String[] argrs) {
		
		// El elementos mas generico puede ser adaptado
		// en si todos son funcionarios

		
		Funcionario funcionario1 = new Gerente();
		//los gerentes son funcionarios
		funcionario1.setNombre("jeanPierreVeliz");
		
		//Gerente gerente1 = new Funcionario(); da error
		//los funcionarios no son gerente
		
		
	}
}
