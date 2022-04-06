const router = require('express').Router();
const { getAll, getById, create } = require('../controllers/sales');
const { validateBody } = require('../middlewares/sales');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateBody, create);
router.put('/:id', validateBody);

module.exports = router;