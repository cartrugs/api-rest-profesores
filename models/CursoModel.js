/**
 * Importación funcionalidad necesaria biblioteca mongoose
 */
const { Schema, model } = require('mongoose');

/**
 * Creación esquema cursoSchema. Cada clave dentro del objeto cursoSchema representa un campo que tendrá cada documento del modelo 'Curso'
 */
const cursoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    duracion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
    }
});

/**
 * Exportación del modelo 'Curso'
 */
module.exports = model('Curso', cursoSchema);