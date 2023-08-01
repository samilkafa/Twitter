const router = require('express').Router();
const User = require("../Users/users-model");

router.get('/', async (req, res, next) => {
    try {
        const users = await User.getAll();
        res.json(users);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.getById(id);
        res.json(user);
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const count = await User.remove(id);
        if (count) {
            res.json({ message: `User id ${id} deleted...` });
        } else {
            res.status(400).json({ message: `Error deleting User id ${id}!..` });
        }
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const count = await User.update(id, req.body);
        if (count) {
            res.json({ message: `User id ${id} updated...` });
        } else {
            res.status(400).json({ message: `Error updating User id ${id}!..` });
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;