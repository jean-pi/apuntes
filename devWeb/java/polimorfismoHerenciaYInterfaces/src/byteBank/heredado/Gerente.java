package byteBank.heredado;

public class Gerente extends Funcionario implements Autenticable{

		private String clave;
		
		public double getBonificacion() {
			// TODO Auto-generated method stub
			// renplaza al this , ya que la variables esta en una clase padre de la clase actual
			return super.getSalario();
			//super para acceder a una propiedad de la clase padre
			//los gerentes obtienen un sueldo de bonificacio
		}

		@Override
		public boolean iniciarSesion(String clave) {
			// TODO Auto-generated method stub
			return this.clave == clave;
		}

		@Override
		public void setClave(String clave) {
			// TODO Auto-generated method stub
			this.clave = clave;
		}
	
		
	
		
		
}
