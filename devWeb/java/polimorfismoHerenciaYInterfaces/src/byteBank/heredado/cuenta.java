package byteBank.heredado;

		class Cuenta{
			private double saldo;
			private int agencia;
			private double id;
			private Cliente titular = new Cliente();
			
			private static int cuentasCreadas = 0;
			// VARIABLES ESTATICAS 
			public Cuenta(int agencia){
				// CONSTRUCUTOR
				// al crear una instacia de una clase se crea un metodo constructor como este pero vacio
				// metodo especial no usa void ni un tipo de dato de retorno
				// como es constructor e clases de JavaScript se definen los valores al crear la clase
				if(agencia <= 0 ) {
					this.agencia = 1;
					System.out.println("no existe una agencia menor que 0");
				}else {
					this.agencia = agencia;
				}
				cuentasCreadas ++;
				// VARIABLES ESTATICAS contador de cuentas creadas cuentas las veces que se ejecuta el constructor de la clase
				System.out.println("se han creado " + cuentasCreadas + " instancia de la clase Cuenta");
			}
			
			public Cliente getTitular() {
				return this.titular;
			}

			public void depositar(double valor){
				//metodo tipo 1: retona valor
				// metodo tipo 2: no retorna valor : void
				this.saldo += valor;
			}
			public boolean retirar(double valor) {
				//metodo tipo 1: retona valor: se debe especificar el valor a retornaren este caso "boolean"
				// metodo tipo 2: no retorna valor : void
				if(this.saldo >= valor) {
					this.saldo -= valor;
					return true;
				}
				return false;
			}
			public boolean transferir(double valor, Cuenta cuenta ) {
				// este metodo requiere un valor a depositar y
				// el identificador de la cuenta donde va a ir el dinero
				if(this.saldo >= valor) {
					retirar(valor);
					cuenta.depositar(valor);
					return true;
				}
				return false;
			}
			public double getSaldo() {
				return this.saldo;
			}
			public void setAgencia(int agencia) {
				if(agencia > 0) {
					this.agencia = agencia;
				}
			}
			public int getAgencia() {
				return this.agencia;
			}
			public void setId(int id) {
				// queria validad que fueran 6 numeros pero me calmo mejor
					this.id = id;
			}
			public double getId() {
				return this.id;
			}

			
			
		}
		//orientado a objetos
		//definir los atributos de mi nueva clase
		//Una instancia de la clase cuenta seria el mismo esqueleto con los datos nuevos
		