
# React Query

>En clean architecture 
    carpeta services: tiene fetch con la url , No hace el async-await ni .then
    porque este se hace (en el mismo componente?) de esta forma puedo manejar el error
        ?si la peticion da error la menejo muestro un mensaje al user de erro y lo manejo segun lo
        requiera la app
        ?si la peticion es 200 ok procedo a pasarle la info a mi adapter que sera el que me pase la
        info lista para consumir, ejemplo una instancia de mi carpteta models con un objeto con la info
        y metodos , este model esta definido por la logica de negocios.

    Donde hago la peticion, en aplicaciones pequeñas basta con hacerla en el useEffect(), pero el mismo
    React recomienta tener una libraria (SWR, react query) para manejar el estado de las peticiones, 
    cache y demas.

## Instalar tanstack react query
## Envolver en un proveedor

    import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'

    // Create a client
    const queryClient = new QueryClient()

    function App() {
      return (
            <QueryClientProvider client={queryClient}>
          <Todos />
        </QueryClientProvider>
      )
    }
