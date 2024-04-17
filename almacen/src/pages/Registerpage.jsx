import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registerpage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { sigup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
        }
  }, [isAuthenticated]);
  return (
    <div className="formulario">
      <h1>Registrarse</h1>
      <form 
      onSubmit={handleSubmit(async (values) => {
        sigup(values);
      })}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.username && <p className="error">Este campo es requerido</p>}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo electrónico"
        />
        {errors.email && <p className="error">Este campo es requerido</p>}
        <input type="password" 
        {...register("password", { required: true })} 
        placeholder="Contraseña" />
        {errors.password && <p className="error">Este campo es requerido</p>}
        <input
          type="number"
          {...register("phone", { required: true })}
          placeholder="Número de teléfono"
        />
        {errors.phone && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Nombre"
        />
        {errors.firstName && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Apellido"
        />
        {errors.lastName && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("gender", { required: true })}
          placeholder="Género"
        />
        {errors.gender && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("fechaNacimiento", { required: true })}
          placeholder="Fecha de nacimiento"
        />
        {errors.fechaNacimiento && <p className="error">Este campo es requerido</p>}
        <input
          type="number"
          {...register("edad", { required: true })}
          placeholder="Edad"
        />
        {errors.edad && <p className="error">Este campo es requerido</p>}
        <button type="submit">Registrarse</button>
      </form>
      <Link className="regresar" to="/">Inicio</Link>
    </div>
  );
}

export default Registerpage;
