
import Roles from '../models/rol';

export const index = async (req, res) => {
    const rol = await Roles.findAll({});
    res.json({ data: rol.map((rol) => rol.toJSON()) });
};

export const show = async (req, res) => {
    const rol = await Roles.findByPk(req.params.id);
    if (rol) {
        res.json({ data: rol.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro un rol con id ${req.params.id}` });
    }
};

export const create = async (req, res) => {
    console.log("LLEGA");
    try {
        if (req.body.nombre !== undefined) {
            console.log(req.body.nombre);
            const rol = await Roles.create({ name: req.body.nombre });
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
            const rol = await Roles.findByPk(req.params.id);
            rol.nombre = req.body.nombre;
            await rol.save();
            res.status(200).send({ id: rol.id });
        } else {
            res.status(400).json('Nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};