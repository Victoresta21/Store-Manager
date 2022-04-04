const router = require('express').Router();
const { getAll, getById, create } = require('../controllers/products');
const { validateBody, validateNameAlreadyExists } = require('../middlewares/products');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateBody, validateNameAlreadyExists, create);
router.put('/:id', validateBody);

module.exports = router;