const Express = require("express");
const uuid = require("uuid");

const members = require("../../Members");
//router api
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

//create member(post method)

router.post("/", (req, res) => {
    //console.log(req.body);
    const newMem = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "Active"
    };
    if (!newMem.name || !newMem.email) {
        res.status(400).json({ message: "Please include name and email id" });
    } else {
        members.push(newMem);
    }
    res.send(members);
});

//create member(put method)

router.put("/:id", (req, res) => {
    //console.log(req.body);
    const updMem = req.body;
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMem.name ? updMem.name : member.name;
                member.email = updMem.email ? updMem.email : member.email;
                res.json({ message: "member updated", member });
            }
        });
    }
    else {
        res.status(400).json({ message: "Please include name and email id" });
    }
    res.send(members);
});

router.delete("/:id", (req, res) => {
    //console.log(req.body);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json({
            message: "member deleted",
            member: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }
    else {
        res.status(400).json({ message: "Please include name and email id" });
    }
    res.send(members);
});

module.exports = router;