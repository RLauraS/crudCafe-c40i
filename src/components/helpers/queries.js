//llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
/*
GET devuelve una lista de elementos,puede devolver un elemento
POST permiten agregar elementos(hay que configurarle mas pasos al request- solicitudes- )
PUT / PATCH permiten modificar elementos (PUT permite modificar todo un elemento-objeto-) PATCH permite modificar ciertas caracteristicas del objeto
DELETE 
*/
//logica del login
export const login = ()=>{
    console.log(URL_usuario)
}