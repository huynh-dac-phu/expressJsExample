var express = require('express');
var router = express();

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


const controller = require('../controller/user.controller');

const authMiddleware = require('../middleware/loginmiddleware');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', authMiddleware.loginAuth, controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.getID);
router.post('/create', userMiddleware.postCreate, controller.postCreate);

module.exports = router;