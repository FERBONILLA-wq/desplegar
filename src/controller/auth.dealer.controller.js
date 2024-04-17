import dealer from '../model/dealer.models.js';
export const register = async (req, res) => {
    try {
        const { idDealer, nombre, apellido, telefono, empresa, correo, fechaCreacion, estatus } = req.body;
        const nuevoDealer = new dealer({
            idDealer,
            nombre,
            apellido,
            telefono,
            empresa,
            correo,
            fechaCreacion,
            estatus
        });
        await nuevoDealer.save();
        res.status(201).json({ message: "Dealer registrado con éxito" });
    } catch (error) {
        console.error("Error al registrar el dealer:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

//editar telefono y correo
export const update = async (req, res) => {
    try {
        const { idDealer, telefono, correo } = req.body;
        await dealer.updateOne({ idDealer }, { telefono, correo });
        res.status(201).json({ message: "Dealer actualizado con éxito" });
    } catch (error) {
        console.error("Error al actualizar el dealer:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

//agregar un fecha de creacion  
export const addFechaCreacion = async (req, res) => {
    try {
        const { idDealer, fechaCreacion } = req.body;
        await dealer.updateOne({ idDealer }, { fechaCreacion });
        res.status(201).json({ message: "Fecha de creación agregada con éxito" });
    } catch (error) {
        console.error("Error al agregar la fecha de creación:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

//consultar todos los dealers
export const getDealers = async (req, res) => {
    try {
        const dealers = await dealer.find();
        res.json(dealers);
    } catch (error) {
        console.error("Error al obtener los dealers:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

//eliminar un dealer estableciendo el estatus en false y no eliminando el registro generando estableciendo la fecha de eliminacion y comprobar si existe el dealer
export const deleteDealer = async (req, res) => {
    try {
        const { idDealer, fechaEliminacion } = req.body;
        const dealerExist = await dealer.findOne({ idDealer });
        if (dealerExist) {
            await dealer.updateOne({ idDealer }, { fechaEliminacion , estatus: false });
            res.status(201).json({ message: "Dealer eliminado con éxito" });
        } else {
            res.status(404).json({ message: "Dealer no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar el dealer:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const login = (_, res) => res.send("dealer login");