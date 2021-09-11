// Import express router
const express = require('express')
const router = express.Router()
const path = require('path')

// / routes

// Dashboard
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

// New workout
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

module.exports = router;