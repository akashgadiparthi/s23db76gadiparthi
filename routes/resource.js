var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Fox_controller = require('../controllers/Fox');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Fox ROUTES ///
// POST request for creating a Fox.
router.post('/Fox', Fox_controller.Fox_create_post);
// DELETE request to delete Fox.
router.delete('/Fox/:id', Fox_controller.Fox_delete);
// PUT request to update Fox.
router.put('/Fox/:id', Fox_controller.Fox_update_put);
// GET request for one Fox.
router.get('/Fox/:id', Fox_controller.Fox_detail);
// GET request for list of all Fox items.
router.get('/Fox', Fox_controller.Fox_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Fox", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
