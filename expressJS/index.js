const express = require("express");

const app = new express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });
