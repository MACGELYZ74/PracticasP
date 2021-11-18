import express from 'express';

import carreras from './carreras';
import roles from './rol';

const router = express.Router();

router.use('/carreras', carreras);
router.use('/rol', roles);
export default router;
