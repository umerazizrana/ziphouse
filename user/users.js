//const express = require("express")

const User = require("./user")

//const app = express();
//const port = 5000;
//app.use(express.json());

const getAllUsers = (req, res) => {   // the request signature
    User.findAll().then((users) => {
        if (users) {
            res.json(users)
        } else {
            res.status(404).send("Users not found");
        }
    }).catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server error %s", err);
    });

};

const getUserById = (req, res) => {
    User.findAll({
        where: {
            id: req.params.userId
        }
    }).then((user) => res.json(user)).catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server error %s", err);
    })
}

//to enable server to listen on the defined port
/*app.listen(port, () => {
    console.log(`Up and Running on port ${port}- This is Customer service`);
})*/

module.exports = {getAllUsers, getUserById};