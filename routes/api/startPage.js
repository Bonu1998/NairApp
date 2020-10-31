const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth')


// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
	res.status(200).json({sucess:true, message:'Landing Page'})
});

module.exports = router;
