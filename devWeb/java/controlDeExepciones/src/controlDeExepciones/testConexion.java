package controlDeExepciones;

public class testConexion {

	public static void main(String[] args) {
		Conexion con = new Conexion();
		
		try {
			con.leerDatos();
			con.cerrar();
			// es comom cuando piedes datos con una promesa 
			// o llamas datos de otra parte y no llegan
			// es nesesario porque si no se bloquea el arbol de ejecuacion
			// y dentro del catch se puede manejar y mostrar el error de la forma que yo quiera
		} catch(IllegalStateException isErrorConexion){
			isErrorConexion.printStackTrace();
			con.cerrar();
		} finally {
			con.cerrar();
		}

		// QUE ES UN TRY con resourses
		
		/* try (conexion con = new conexion){
		 * 
		 * }
		 * 
		 * implements AutoCloseable?????
		 */
	}
}
