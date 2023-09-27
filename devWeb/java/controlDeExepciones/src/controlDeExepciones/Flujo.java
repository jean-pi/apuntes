package controlDeExepciones;

	public class Flujo {

		  public static void main(String[] args) {
		    System.out.println("Inicio de main");
		    //metodo1();
		    System.out.println("Fin de main");
		  }
		  public static void metodo1(){
		    System.out.println("Ini do metodo1");
		    try {
		    	metodo2();
		    } catch(MiException exception) {
		    	 exception.printStackTrace();
		    }
		    System.out.println("Fin de metodo1");
		  }
		  public static void metodo2(){
		    System.out.println("Inicio do metodo2");
		    for(int i =1; i<= 5; i++){
		      try {
		    	  int num = 1;
		    	  int operacion = i/num;
		    	  System.out.println(operacion);
		      } catch(ArithmeticException exception){

		    	  //System.out.println(exception);
		    	  //System.out.println(exception.getMessage());
		    	  exception.printStackTrace();// metodo que muestra info del error mas completa
		      }
		      throw new MiException("la exception personalizada fue lanzada");
		      // puedo lanzar un error cuando yo quiera
		      // throw solo se puede usar con exepciones
		    }
		    System.out.println("Fim do metodo2");
			
		  }
		}


