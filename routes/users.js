const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/mongoose");

const validateLoginInput = require("../validation/login");
const User = require("../models/User");
const heldStocks = require("../models/Stock");

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

router.get("/users", (req, res) => {
    User.find({})
        .then((users) => {
            res.send(users);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

router.get("/users/:id", (req, res) => {
    const _id = req.params.id;

    User.findById(_id)
        .then((user) => {
            if (!user) {
                return res.status(400).send();
            }
            res.send(user);
        })
        .catch((error) => {
            res.status(500).send();
        });
});

router.post("/buy", (req, res) => {
    const stock = new heldStocks(req.body);
    stock
        .save()
        .then(() => {
            res.status(201).send(stock);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

router.get("/heldstocks", (req, res) => {
    heldStocks
        .find({})
        .then((stock) => {
            res.send(stock);
        })
        .catch((error) => {
            res.send(500).send(error);
        });
});

module.exports = router;
