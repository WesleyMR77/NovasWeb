const express = require('express');
const middleware = require('../../middlewares/auth');

const router = express.Router();
const controller = require('../controllers/user');

router.use(middleware.verifyToken);

router.get('/profile/:id', controller.show);
router.get('/edit/:id', middleware.verifyAdmin, controller.show);
router.post('/edit/:id', middleware.verifyAdmin, controller.update);
router.get('/delete/:id', middleware.verifyAdmin, controller.delete);

module.exports = routes;
