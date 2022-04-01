const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/mongoose");

const validateLoginInput = require("../validation/login");
const User = require("../models/User");

router.post("/login", (req, res) => {
    // Form Validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const user = new User(req.body);

    user.save()
        .then(() => {
            res.send(user);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

module.exports = router;
