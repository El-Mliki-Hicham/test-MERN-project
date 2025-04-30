var express = require('express');
var router = express.Router();
var {getUsers , storeUser} = require('../controllers/userController');
const userValidation = require('../validators/userValidator');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.send('route test');
});

//get users
router.get('/index',getUsers);

//store users
router.post('/store', userValidation, storeUser); 


module.exports = router;
