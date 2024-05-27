const express = require("express");
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express()
const port = 8000;

//middleware
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        return res.json(user)
    })
    .patch((req, res) => {
        //TODO: edit the user
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        //TODO: edit the user
        return res.json({ status: "pending" })
    })


app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "sucess", id: users.length})
    })
    
})

app.listen(port, () => console.log("server started"))