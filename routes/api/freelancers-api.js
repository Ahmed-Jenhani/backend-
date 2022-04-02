const router = require('express').Router();
const freelancersController = require('../../controllers/freelancers-controller');
const auth = require('../../middleware/auth');

// @route   GET api/freelancer
// @desc    Get all freelancer
// @access  Public
router.get('/',freelancersController.get)

// @route   GET api/freelancer
// @desc    Get freelancer by id
// @access  Public
router.get('/:id',freelancersController.getById)

// @route   GET api/freelancer
// @desc    Add freelancer
// @access  Private
router.post('/',auth,freelancersController.post)

// @route   GET api/freelancer
// @desc    Update freelancer
// @access  Private
router.put('/:id',auth,freelancersController.put)

// @route   GET api/freelancer
// @desc    Delete freelancer
// @access  Private
router.delete('/:id',auth,freelancersController.delete)

module.exports = router;