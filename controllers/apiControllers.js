const Curso =require('../models/CursoModel');

// Recoger todos los cursos
const getCursos = async (req, res) => {

    try {
        const cursos = await Curso.find()

        return res.status(200).json({
            ok: true,
            msg: 'recoge todos los cursos',
            data: cursos,
            total_results: cursos.length,
            limit: 15
        })
    } catch (error) {
        console.log(error)
    }
};

// Crea un curso
const createCurso =  async (req, res) => {
    const curso = new Curso (req.body)

    try {

        const { nombre } = req.body;

        const creado = await Curso.findOne({ nombre });

        if (creado) {
            return res.status(400).json({
                ok: false,
                msg: 'El curso ya fue creado'
            });
        }

        const cursoSaved = await curso.save()
        return res.status(201).json({
            ok: true,
            msg: 'curso creado',
            data: cursoSaved
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json
    }
}

// Recoge un curso por su id
const getCursoById = async (req, res) => {
    const id = req.params.id;

    try {

        const curso = await Curso.findById(id);

        if (!curso) {
            return res.status(404).json({ 
                ok: false,
                msg: 'Curso no encontrado'
            });
        }

        return res.status(200).json({ curso })  
    } catch (error) {
        console.log(error)
    }
};

// Actualizar un curso por su id
const updateCursoById = async (req, res) => {
    const id = req.params.id;
    const nuevosDatos = req.body;

    try {
        const cursoActualizado = await Curso.findByIdAndUpdate(id, nuevosDatos, { new: true });

        if (!cursoActualizado) {
            return res.status(404).json({ 
                msg: 'Curso no encontrado' 
            });
        }

        return res.status(200).json({ 
            ok: true,
            msg: 'Curso actualizado exitosamente', curso: cursoActualizado });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error interno del servidor'
        });
    }
};


// Eliminar un curso por su id
const deleteCursoById = async (req, res) => {
    const id = req.params.id;
    console.log(id)

    try {

        const curso = await Curso.findByIdAndDelete(id);

        if (!curso) {
            return res.status(404).json({
                ok: false,
                msg: 'Curso no encontrado'
            });
        }

       return res.status(200).json({ curso }) 
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getCursos,
    createCurso,
    getCursoById,
    updateCursoById,
    deleteCursoById
};