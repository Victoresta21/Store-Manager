const router = require('express').Router();
const { getAll, getById, create, update, exclude } = require('../controllers/products');
const {
validateBody,
validateNameAlreadyExists,
validateProductExists,
} = require('../middlewares/products');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateBody, validateNameAlreadyExists, create);
router.put('/:id', validateBody, validateProductExists, update);
router.delete('/:id', validateProductExists, exclude);

module.exports = router;