var Fox = require('../models/Fox');
// List of all Fox
exports.Fox_list = function(req, res) {
res.send('NOT IMPLEMENTED: Fox list');
};
// for a specific Fox.
exports.Fox_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Fox detail: ' + req.params.id);
};
// Handle Fox create on POST.
exports.Fox_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Fox create POST');
};
// Handle Fox delete form on DELETE.
exports.Fox_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Fox delete DELETE ' + req.params.id);
};
// Handle Fox update form on PUT.
exports.Fox_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Fox update PUT' + req.params.id);
};

// List of all Fox
exports.Fox_list = async function(req, res) {
    try{
    theFox = await Fox.find();
    res.send(theFox);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    
    
