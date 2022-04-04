const router = require('express').Router();
const { getAll, getById } = require('../controllers/products');
const { validateBody } = require('../middlewares/products');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateBody);
router.put('/:id', validateBody);

module.exports = router;