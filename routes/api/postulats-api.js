const router = require('express').Router();
const postulatsController = require('../../controllers/postulats-controller');
const auth = require('../../middleware/auth');

// @route   GET api/postulats
// @desc    Get all postulats
// @access  Public
router.get('/',postulatsController.get)

// @route   GET api/postulats
// @desc    Get postulats by id
// @access  Public
router.get('/:id',postulatsController.getById)

// @route   GET api/postulats
// @desc    Add postulats
// @access  Private
router.post('/',auth,postulatsController.post)

// @route   GET api/postulats
// @desc    Update postulats
// @access  Private
router.put('/:id',auth,postulatsController.put)

// @route   GET api/postulats
// @desc    Delete postulats
// @access  Private
router.delete('/:id',auth,postulatsController.delete)

module.exports = router;