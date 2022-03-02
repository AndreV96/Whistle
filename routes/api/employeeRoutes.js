const router = require('express').Router();
const { Employee, Projects } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const employeeData = await Employee.findAll({
            include: { model: Projects},
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const employeeData = await Employee.finByPk(req.params.id, {
            include: { model: Projects }
        });
        if(!employeeData) {
            res.status(404).json({ message: "No employee found with this id" });
            return
        }
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post

router.put

router.delete