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
module.exports = router;
