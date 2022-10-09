var express = require('express');
var router = express.Router();

const { downloadResource } = require("../scripts/downloadResources");

/* GET home page. */
router.get('/', async function(req, res, next) {
	//const bazaarData = await downloadResource("skyblock/bazaar");
	//const itemsData = await downloadResource("resources/skyblock/items");

	const bazaarData = require("../data/skyblock/bazaar.json");
	const itemData = require("../data/resources/skyblock/items.json");

	res.render('index', { bazaarData, itemData });
});

module.exports = router;