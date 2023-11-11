var Fox = require('../models/Fox');
// List of all Fox
exports.Fox_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Fox list');
};
// for a specific Fox.
exports.Fox_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Fox.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Fox create on POST.
exports.Fox_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Fox create POST');
};
// Handle Fox delete form on DELETE.
exports.Fox_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Fox delete DELETE ' + req.params.id);
};
// Handle Fox update form on PUT.
exports.Fox_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Fox.findById( req.params.id)
    // Do updates of properties
    if(req.body.Fox_color) toUpdate.Fox_color = req.body.Fox_color;
    if(req.body.Fox_breed) toUpdate.Fox_breed = req.body.Fox_breed;
    if(req.body.Fox_price) toUpdate.Fox_price = req.body.Fox_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };


// List of all Fox
exports.Fox_list = async function (req, res) {
    try {
        theFox = await Fox.find();
        res.send(theFox);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Fox_view_all_Page = async function (req, res) {
    try {
        theFox = await Fox.find();
        res.render('Fox', { title: 'Fox Search Results', results: theFox });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Fox create on POST.
exports.Fox_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Fox();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Fox_type":"goat", "cost":12, "size":"large"}
    document.Fox_color = req.body.Fox_color;
    document.Fox_breed = req.body.Fox_breed;
    document.Fox_price = req.body.Fox_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};




