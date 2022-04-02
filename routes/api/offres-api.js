const router = require('express').Router();
const offresController = require('../../controllers/offres-controller');
const auth = require('../../middleware/auth');

// @route   GET api/offre
// @desc    Get all offre
// @access  Public
router.get('/',offresController.get)

// @route   GET api/offre
// @desc    Get offre by id
// @access  Public
router.get('/:id',offresController.getById)

// @route   GET api/offre
// @desc    Add offre
// @access  Private
router.post('/',auth,offresController.post)

// @route   GET api/offre
// @desc    Update offre
// @access  Private
router.put('/:id',auth,offresController.put)

// @route   GET api/offre
// @desc    Delete offre
// @access  Private
router.delete('/:id',auth,offresController.delete)

module.exports = router;