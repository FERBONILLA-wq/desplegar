import {useForm} from 'react-hook-form';
import {regisprov} from '/api/Auth';
import { Link } from "react-router-dom";

function Insertdealer() {
    const { register, handleSubmit } = useForm();
    
    return (
        <div className="formulario">
        <h1>Registrar proveedor</h1>
        <form 
        onSubmit={handleSubmit(async (values) => {
            console.log(values);
            const res=await regisprov(values);
            console.log(res);
        })}>
            <input type="text"
            {...register("idDealer", { required: true })}
            placeholder="Código del proveedor"
            />
            <input
            type="text"
            {...register("nombre", { required: true })}
            placeholder="Nombre del proveedor"
            />
            <input
            type="text"
            {...register("apellido", { required: true })}
            placeholder="Apellido del proveedor"
            />
            <input 
            type="number"
            {...register("telefono", { required: true })}
            placeholder="Teléfono del proveedor"
            />
            <input
            type="text"
            {...register("empresa", { required: true })}
            placeholder="Empresa del proveedor"
            />
            <input
            type="text"
            {...register("correo", { required: true })}
            placeholder="Correo electrónico del proveedor"
            />
            <input
            type="text"
            {...register("fechaCreacion", { required: true })}
            placeholder="Fecha de creación del proveedor"
            />
            <input
            type="text"
            {...register("estatus", { required: true })}
            placeholder="Estatus del proveedor"
            />
            <button type="submit">Registrar proveedor</button>
        </form>
        <Link to="/">Regresar</Link>
        </div>
    );
    }
    export default Insertdealer;