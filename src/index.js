const request = require('request-json');
let client = request.createClient(process.env.API_URL);
const router = require('express').Router();


router.get('/plans', (req, res) => {
	client.get('v1/package')
		.then((data) => {
			let plans = JSON.parse(data.res.body);

			res.render('plans', {plans});
		});
});


module.exports = router;
