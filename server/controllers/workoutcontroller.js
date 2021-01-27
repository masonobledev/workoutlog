let express = require('express');
let router = express.Router();
const validateSession = require('../middleware/validate-session');
const Log = require('../db'.import('../models/log'));
router.get('/practice', validateSession, function (req, res)
{
    res.send('This is a practice route!')
})

/* CREATE LOG ENTRY */
router.post('/log', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err}))
})

/* GET ALL ENTRIES */
router.get('/log', (req, res) => {
    Log.findAll()
        .then(logs => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err}))
});

/* GET ENTRIES BY USER */
router.get('/log', validateSession, (req, res) => {
    let userid = req.user.id
    Log.findAll({
        where: { owner: userid }
    })
    .then(journals => res.status(200).json(journals))
    .catch(err => res.status(500).json({ error: err}))
    
    });
    
module.exports = router;