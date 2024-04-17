import {useForm} from 'react-hook-form';
import {regisproduc} from '/api/Auth';
import { Link } from "react-router-dom";

function Insertproduct() {
    const { register, handleSubmit } = useForm();
    
    return (
        <div className="formulario">
        <h1>Registrar producto</h1>
        <form 
        onSubmit={handleSubmit(async (values) => {
            console.log(values);
            const res=await regisproduc(values);
            console.log(res);
        })}>
            <input type="number"
            {...register("codigo", { required: true })}
            placeholder="Código del producto"
            />
            <input
            type="text"
            {...register("nombre", { required: true })}
            placeholder="Nombre del producto"
            />
            <input
            type="text"
            {...register("descripcion", { required: true })}
            placeholder="Descripción del producto"
            />
            <input 
            type="text"
            {...register("fechaCreacion", { required: true })}
            placeholder="Fecha de creación"
            />
            <input
            type="text"
            {...register("estatus", { required: true })}
            placeholder="Estatus del producto"
            />
            <input
            type="text"
            {...register("proveedor", { required: true })}
            placeholder="Proveedor del producto"
            /> 
            <button type="submit">Registrar producto</button>
        </form>
        <Link to="/">Regresar</Link>
        </div>
    );
    }
    export default Insertproduct;