const express = require('express')
const router = express.Router()

//Body on main page 
router.get('/', (req, res) => {
  res.render(`index/welcome`)
})

module.exports = router