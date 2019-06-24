const express = require('express');
const middleware = require('../../middlewares/auth');

const router = express.Router();
const controller = require('../controllers/character');

router.use(middleware.verifyToken);

router.get('/:id', controller.show);
router.get('/edit/:id', middleware.verifyAdmin, controller.show);
router.post('/edit/:id', middleware.verifyAdmin, controller.update);

module.exports = router;