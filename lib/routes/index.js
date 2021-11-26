import express from 'express';

import carreras from './carreras';
import roles from './rol';
import usuario from './usuario';
import materias from './materias';


const router = express.Router();

router.use('/carreras', carreras);
router.use('/rol', roles);
router.use("/usuario", usuario);
router.use("/materias", materias);
export default router;
