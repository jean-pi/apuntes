package controlDeExepciones;

		// Aplicaciones distribuidas
		// Facebook es un ejemplo de aplicacionesdistribuida
		// todo el codigo de facibook no es solo un proyectos si no que se divide en varios proyectos
		// y estos proyectos de comunican entre si
		// 
		
		public class Conexion {

			   public Conexion() {
			       System.out.println("Abriendo conexion");
			   }

			   public void leerDatos() {
			       System.out.println("Recibiendo datos");
			       throw new IllegalStateException();
			       // error de conexion con otros servicio
			   }

			   public void cerrar() {
			       System.out.println("Cerrando conexion");
			   }
			}
	
