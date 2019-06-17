// Our router module
const router = require('express').Router();

// Our controller
const ResourcesController = require('../controllers/resourcesController');

// Your routes

// GET site home page.
router.get('/', ResourcesController.index);

// GET show registration entry list page.
router.get('/metahumans/show', ResourcesController.show);

// GET new registration page.
router.get('/metahumans/new', ResourcesController.new);

// GET edit page.
router.get('/metahumans/:id/edit', ResourcesController.edit);

// GET create page.
router.get('/metahumans/create', ResourcesController.create);

// GET update page.
router.get('/metahumans/:id/update', ResourcesController.update);

// GET destroy page.
router.get('/metahumans/:id/destroy', ResourcesController.destroy);

// We have to export our changes
module.exports = router;