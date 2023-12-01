const { check, validationResult } = require("express-validator");

exports.registervalidator = () => [
    check("firstName", "please enter your firstName").not().isEmpty(),
    check("name", "please enter your Name").not().isEmpty(),
    check("email", "please enter your email address").isEmail(),
    check("password", "please enter a correct password").isLength({ min: 6 })
  ];
  

exports.loginvalidator = () => [
  check("email", "please enter your email address").isEmail(),
  check("password", "please enter a correct password").isLength({ min: 6 })
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
