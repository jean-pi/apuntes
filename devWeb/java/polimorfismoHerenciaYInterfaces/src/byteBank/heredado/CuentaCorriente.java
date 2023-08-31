package byteBank.heredado;


public class CuentaCorriente extends  Cuenta {
	// EL constructor de la clase Cuenta pide un numero de agencia para ser creado 
	// se debe otrotgar obligatoriamente una agencia para crear una i stancia de esta clase
		// entoces da un error
	public CuentaCorriente(int agencia) {
		super(agencia); 
		// al escribir solo super() se llama el constructor completo de la clase
			
	}
	
	@Override
	public boolean retirar(double valor) {
		// TODO Auto-generated method stub
		double comision = 0.2;
		return super.retirar(valor + comision);
	}
}