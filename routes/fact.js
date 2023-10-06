var express = require('express');
var router = express.Router();
const fetch = require('axios')




router.get('/fact', async function(req, res) {
    const response = await fetch('https://catfact.ninja/fact')
    console.log(response)
    const catFacts = response.data.fact
    res.render('fact', { catFacts })
})

module.exports = router;