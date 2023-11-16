// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Fox', { title: 'Search Results Fox' });
// });
// module.exports = router;

var express = require('express');
const Fox_controlers= require('../controllers/Fox');
var router = express.Router();
/* GET Fox */
router.get('/', Fox_controlers.Fox_view_all_Page );
/* GET detail Fox page */
router.get('/detail', Fox_controlers.Fox_view_one_Page);
/* GET create Fox page */
router.get('/create', Fox_controlers.Fox_create_Page);
/* GET create update page */
router.get('/update', Fox_controlers.Fox_update_Page);
/* GET delete Fox page */
router.get('/delete', Fox_controlers.Fox_delete_Page);
module.exports = router;
