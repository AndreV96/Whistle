const router = require('express').Router();
const { ProjectMembers } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const projectMembersData = await Manager.findAll({
            include: [{model: ProjectMembers}]
        });
        res.status(200).json(projectMembersData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const projectMembersData = await Manager.finByPk(req.params.id, {
            include: [{model: Manager}, {model: Employee}]
        });
        if(!projectMembersData) {
            res.status(404).json({ message: "No project members founs with this id" });
            return
        }
        res.status(200).json(projectMembersData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post

router.put

router.delete
