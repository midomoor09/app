const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors({
    origin: "*",  // السماح بالاتصال من أي مكان
    methods: ["GET", "POST"]
}));
app.use(bodyParser.json());

let users = [];

app.post("/submit", (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: "User added successfully!", users });
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://192.168.1.43:${PORT}`));

