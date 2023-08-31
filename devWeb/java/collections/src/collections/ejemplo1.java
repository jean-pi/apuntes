package collections;

import java.util.ArrayList;
import java.util.Collections;

public class ejemplo1 {
	public static void main(String[] args) {
		
		String variable1 = "ejemplo 1";
		String variable2 = "ejemplo 2";
		String variable3 = "ejemplo 3";
		String variable4 = "ejemplo 4";
		String variable5 = "ejemplo 5";
		String variable6 = "ejemplo 6";
		
		
		ArrayList<String> lista = new ArrayList<>();
		lista.add(variable1);
		lista.add(variable2);
		lista.add(variable3);
		lista.add(variable4);
		lista.add(variable5);
		lista.add(variable6);
		System.out.println(lista);
		
		lista.remove(0);
		System.out.println(lista);
		
		lista.set(0, "nueva variable 0");
		lista.set(3, variable6);
		System.out.println(lista);
		
		lista.forEach(element -> {
			System.out.println(element);
		});

		
		Collections.sort(lista);
		System.out.println(lista);// menor a mayor
		
		Collections.sort(lista, Collections.reverseOrder());
		System.out.println(lista);//reversa


		// Cuenta cuenta1 = new Cuenta(id = "101", propietario = "jean veliz");
		// ArrayList<Cuenta> listaDeCuentas = new ArrayList<>();
		// listaDeCuentas.add(cuenta1);
		// se peude trabajar con listas de objetos 
		
		
		// Interfase List???
		// referencia y encapsulamiento entre listas???
		// ArrayList y LinkedList???
		
		// metodos de la interfaz Stream: 
		// filter, findAny, findFirst, mapToInt, map, max, min, anyMatch
		// filtrer() de Stream()
		// mapToInt() de stream()
		// average(), max(), min() de un stream()
		
		
		// interfase Set
		// removeIf() de interfaz Collection
		
		// metodos equals o hashCode
		// Leer valores de una lista usando la interfaz Iterator a través del método next().
		// diferencia entre un Set y List
		
		// maps
		
		
	}
}
