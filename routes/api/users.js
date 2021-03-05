const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//POST api/users
//Register user
//Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a pasword with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Users route');
  }
);

module.exports = router;
