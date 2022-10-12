var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
	const title = "Bazaar";
	const bazaarData = require("../data/skyblock/bazaar.json");
	const itemData = require("../data/resources/skyblock/items.json");

	res.render('bazaar', { title, bazaarData, itemData });
});

module.exports = router;