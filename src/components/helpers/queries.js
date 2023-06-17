//llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
/*
GET devuelve una lista de elementos,puede devolver un elemento
POST permiten agregar elementos(hay que configurarle mas pasos al request- solicitudes- )
PUT / PATCH permiten modificar elementos (PUT permite modificar todo un elemento-objeto-) PATCH permite modificar ciertas caracteristicas del objeto
DELETE 
*/
//logica del login
export const login = async (usuario) => {
  try {
    //pedir a la api la lista de usuarios, porque json server no tiene una logica que haga el login
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json(); // con .json lo que hao es extraer el body transformado a un formato que js sabe manejar
    //buscar si en la lista de usuarios existe el mail
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      //si se encuentra el mail
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("El password es incorrecto");
        return null;
      }
    } else {
      //no se encontro el mail
      console.log("el mail no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
