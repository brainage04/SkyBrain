var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
	const title = "Home";

	res.render('index', { title });
});

module.exports = router;