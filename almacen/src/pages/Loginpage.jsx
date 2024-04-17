import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Loginpage() {
    const{register, handleSubmit, formState:{errors}} = useForm();
    const {sigin} = useAuth();
    const onSubmit= handleSubmit((data) => {
        sigin(data);
    });
  return (
    <div className="formulario">
      <h1>Iniciar session</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.username && <p className="error">Este campo es requerido</p>}
        <input type="password" 
        {...register("password", { required: true })} 
        placeholder="Contraseña" />
        {errors.password && <p className="error">Este campo es requerido</p>}
        <button type="submit">Iniciar sesion</button>
      </form>
      <Link className="regresar" to="/">Inicio</Link>
    </div>
  );
}

export default Loginpage;
