const express = require('express');
const router = express.Router();
const {getCursos, getCursoById, createCurso, updateCursoById, deleteCursoById} = require('../controllers/apiControllers')
const { validateInputs } = require('../middleware/validateInputs')
const {check} = require('express-validator')
// Recoger todos los servicios
router.get('/cursos', getCursos)

// Recoge un servicio por su id
router.get('/cursos/:id', getCursoById)// para recoger un unico curso por su id, se pasa variable a la url con dos puntos <:> (En este caso id es una variable)

// Cree un curso
router.post(
    '/cursos',
    [
        check('nombre', 'Es obligatorio proporcionar un nombre').not().isEmpty(),
        check('duracion', 'Es obligatorio proporcionar la duracion').not().isEmpty(),
        validateInputs
    ],
    createCurso
    )

// Actualice un servicio
router.put('/cursos/:id', updateCursoById)

// Elimine un servicio
router.delete('/cursos/:id', deleteCursoById)

module.exports = router;