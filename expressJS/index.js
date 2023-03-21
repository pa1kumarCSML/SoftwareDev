const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

//init express
const app = new express();

const PORT = process.env.PORT || 5000;

//default home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//**Set static folder

app.use(express.static(path.join(__dirname, "public")));

// init middleware
//app.use(logger);//executes whenever there is a request.

//REST API

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });
