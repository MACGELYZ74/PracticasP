
import Curso from '../models/curso';

export const index = async (req, res) => {
    const curso = await Curso.findAll({});
    res.json({ data: curso.map((curso) => curso.toJSON()) });
};

export const show = async (req, res) => {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
        res.json({ data: curso.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro un curso con id ${req.params.id}` });
    }
};

export const create = async (req, res) => {
    console.log("LLEGA");
    try {
        if (req.body.nombre !== undefined) {
            console.log(req.body.nombre);
            const curso = await Curso.create({ name: req.body.nombre });
            res.status(200).send({ id: rol.id });
        } else {
            res.status(400).json('Nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

export const update = async (req, res) => {
    try {
        if (req.body.nombre !== undefined) {
            const curso = await Curso.findByPk(req.params.id);
            curso.nombre = req.body.nombre;
            await rol.save();
            res.status(200).send({ id: rol.id });
        } else {
            res.status(400).json('Nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};