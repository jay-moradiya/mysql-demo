const express = require('express')
const { postUser, getUser, getUserById, updateUser, deleteUser } = require('../controller/userController')
const router = express.Router()

router.get('/', (req, res) => { res.send('Inside User Routs') });
router.post('/postUser', postUser);
router.get('/getUser', getUser);
router.get('/getUserById?:id', getUserById);
router.put('/updateUser?:id', updateUser);
router.delete('/deleteUser?:id', deleteUser);

module.exports = router;