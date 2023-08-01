const router = require('express').Router();
const User = require("../Users/users-model");
const bcrypt = require('bcryptjs');
const { HASH_ROUND } = require("../../config");

router.post('/register', async (req, res, next) => {
    try {
        const payload = req.body;
        payload.password = bcrypt.hashSync(payload.password, Number(HASH_ROUND));
        console.log(payload.password);
        const newUser = await User.create(payload);
        if (newUser) {
            res.status(201).json({ message: `Welcome ${payload.first_name}...` });
        } else {
            next({ status: 400, message: "Create user error..." });
        }
    } catch (error) {
        next(error);
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const registeredUser = await User.getByFilter({ email });
        if (registeredUser && bcrypt.compareSync(password, registeredUser.password)) {
            res.json({ message: `Welcome ${registeredUser.first_name}...` });
        } else {
            next({ status: 401, message: "Invalid credentials..." });
        }
    } catch (error) {
        next(error);
    }
})

router.post('/password/reset', async (req, res, next) => {
    res.json("password reset")
})

// router.get('/logout', (req, res, next) => {
//     res.json("router working as expected...")
// })

module.exports = router;