const Express = require("express");
const members = require("../../Members");

const router = new Express.Router();

//Get all members
router.get("/", (req, res) => {
    res.json(members);
});

//Get single member with proper response

router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))[0]);
    } else {
        res.status(400).json({ message: `No member with the id ${req.params.id}` });
    }
});

module.exports = router;