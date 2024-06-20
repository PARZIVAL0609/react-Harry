const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const JWT_SECRET = "ochagaume";

//Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valis name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry :( A user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      //Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({authToken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

module.exports = router;
