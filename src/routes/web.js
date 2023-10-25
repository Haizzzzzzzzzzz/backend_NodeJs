const express = require('express');
const {getHomepage, getABC, getHai, postCreateUser, getCreatePage} = require("../controllers/homeController")
const router = express.Router();

router.get('/', getHomepage)
  
// router.get('/hai', (req, res) => {
// res.send('Hai dz')
// })
router.get('/hai', getHai)

// router.get('/abc', (req, res) => {
// res.render('sample.ejs')
// })
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser);



module.exports = router //export ra mot bien