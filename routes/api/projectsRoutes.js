const router = require('express').Router();
const { Projects } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const projectData = await Manager.findAll({
            include: [{model: Projects}]
        });
        res.status(200).json(projectData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const projectData = await Manager.finByPk(req.params.id, {
            include: [{model: Projects}]
        });
        if(!projectData) {
            res.status(404).json({ message: "No projects found with this id" });
            return
        }
        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post

router.put

router.delete