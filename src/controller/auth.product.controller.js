import product from "../model/product.models.js";
export const register = async (req, res) => {
    try {
        const { codigo, nombre, descripcion, fechaCreacion, estatus, proveedor } = req.body;
        const nuevoProduct = new product({
            codigo,
            nombre,
            descripcion,
            fechaCreacion,
            estatus,
            proveedor,
        });
        await nuevoProduct.save();
        res.status(201).json({ message: "Producto registrado con éxito" });
    } catch (error) {
        console.error("Error al registrar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

//consultar todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


//agregar un fecha de creacion
export const addFechaCreacion = async (req, res) => {
    try {
        const { codigo, fechaCreacion } = req.body;
        await product.updateOne({ codigo }, { fechaCreacion });
        res.status(201).json({ message: "Fecha de creación agregada con éxito" });
    } catch (error) {
        console.error("Error al agregar la fecha de creación:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

//editar descripcion y nombre
export const update = async (req, res) => {
    try {
        const { codigo, descripcion, nombre } = req.body;
        await product.updateOne({ codigo }, { descripcion, nombre });
        res.status(201).json({ message: "Producto actualizado con éxito" });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

//eliminar un producto estableciendo el estatus en false y no eliminando el registro generando estableciendo la fecha de eliminacion
export const deleteProduct = async (req, res) => {
    try {
        const { codigo, fechaEliminacion } = req.body;
        await product.updateOne({ codigo }, { estatus: false, fechaEliminacion });
        res.status(201).json({ message: "Producto eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const login = (_, res) => res.send("product login");