const express = require('express')
const user = require('./userRouter')
const router = express.Router()

router.get('/', (req, res) => res.send('Inseide Index Router'));
router.use(
    '/api',
    user
);

module.exports = router
