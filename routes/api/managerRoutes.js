const router = require('express').Router();
const { Manager, Employee, Projects, ProjectMembers } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const managerData = await Manager.findAll({
            include: [{model: Manager}, {model: Employee}]
        });
        res.status(200).json(managerData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const managerData = await Manager.finByPk(req.params.id, {
            include: [{model: Manager}, {model: Employee}]
        });
        if(!managerData) {
            res.status(404).json({ message: "No manager found with this id" });
            return
        }
        res.status(200).json(managerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post

router.put

router.delete
