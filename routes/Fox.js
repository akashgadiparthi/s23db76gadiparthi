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
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET Fox */
router.get('/', Fox_controlers.Fox_view_all_Page );
/* GET detail Fox page */
router.get('/detail', Fox_controlers.Fox_view_one_Page);
/* GET create Fox page */
router.get('/create',secured, Fox_controlers.Fox_create_Page);
/* GET create update page */
router.get('/update',secured,Fox_controlers.Fox_update_Page);
/* GET delete Fox page */
router.get('/delete',secured, Fox_controlers.Fox_delete_Page);
module.exports = router;
