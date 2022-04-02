const router = require('express').Router();
const entreprisesController = require('../../controllers/entreprises-controller');
const auth = require('../../middleware/auth');

// @route   GET api/entreprise
// @desc    Get all entreprises
// @access  Public
router.get('/',entreprisesController.get)

// @route   GET api/entreprise
// @desc    Get entreprise by id
// @access  Public
router.get('/:id',entreprisesController.getById)

// @route   GET api/entreprise
// @desc    Add entreprise
// @access  Private
router.post('/',auth,entreprisesController.post)

// @route   GET api/entreprise
// @desc    Update entreprise
// @access  Private
router.put('/:id',auth,entreprisesController.put)

// @route   GET api/entreprise
// @desc    Delete entreprise
// @access  Private
router.delete('/:id',auth,entreprisesController.delete)

module.exports = router;