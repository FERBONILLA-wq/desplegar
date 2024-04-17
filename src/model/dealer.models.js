import mongoose from 'mongoose';
const dealerSchema = new mongoose.Schema({
    idDealer: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: String,
    },
    fechaEliminacion:{
        type: String,
    },
    estatus: {
        type: Boolean,
        required: true
    }
});
export default mongoose.model('Dealer', dealerSchema);