const router = require('express').Router();
const { Tasks } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const tasksData = await Manager.findAll({
            include: [{model: Tasks}]
        });
        res.status(200).json(tasksData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const tasksData = await Manager.finByPk(req.params.id, {
            include: [{model: Tasks}]
        });
        if(!tasksData) {
            res.status(404).json({ message: "No tasks found with this id" });
            return
        }
        res.status(200).json(tasksData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post

router.put

router.delete