const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth')


// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
	// redirect to the main dashboard page
	// the below json is send for testing purpose
	res.status(200).json({sucess:true, message:'Landing Page'})
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
	// redirect to the main dashboard page
	// the below json is send for testing purpose
	res.status(200).json({sucess:true, message:"Sign in Successful"});
});

module.exports = router;
