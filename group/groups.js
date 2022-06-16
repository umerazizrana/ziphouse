const Group = require('./group');

const getAllGroups = (req, res) => {
    Group.findAll().then((groups) => {
        if (groups) {
            res.json(groups)
        } else {
            res.status(404).send("Groups not found");
        }
    }).catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server error %s", err);
    });
}

const getGroupById = (req, res) => {
    Group.findAll({
        where: {
            id: req.params.groupId
        }
    }).then((group) => {
        if (group) {
            res.json(group)
        } else {
            res.status(404).send("Group not found");
        }
    }).catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server error %s", err);
    });
}

module.exports = { getAllGroups, getGroupById }