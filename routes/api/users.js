// /routes/api/users.js
const express = require('express')
const router = express.Router()
const {
  checkToken,
  dataController,
  apiController
} = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', dataController.create, apiController.auth)

// POST /api/users/login
router.post('/login', dataController.login, apiController.auth)

// GET: /api/users - Index Route
router.get('/', dataController.index, apiController.index)

// GET /api/users - Show Route
router.get('/:id', dataController.show, apiController.show)

router.put('/:id', dataController.update, apiController.show)

// router.get('/linkTree/:id', dataController.showLinkTree, apiController.show)
router.get(
  '/linkTree/:name',
  dataController.showShortenLinkTree,
  apiController.show
)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router
