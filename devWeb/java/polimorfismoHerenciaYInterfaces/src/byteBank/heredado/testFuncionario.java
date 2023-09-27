package byteBank.heredado;

public class testFuncionario {

	public static void main(String[] argrs) {
		Funcionario Pierre = new Contador();
		Pierre.setCedula("5768593920");
		Pierre.setNombre("Pierre le montiu");
		Pierre.setSalario(1000.05);
		System.out.println(Pierre.getBonificacion());
	} 

}
