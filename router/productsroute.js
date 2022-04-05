const router = require('express').Router();
const { getAll, getById, create, update } = require('../controllers/products');
const {
validateBody,
validateNameAlreadyExists,
validateProductExists,
} = require('../middlewares/products');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateBody, validateNameAlreadyExists, create);
router.put('/:id', validateBody, validateProductExists, update);

module.exports = router;