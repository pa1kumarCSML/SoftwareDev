const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;


const app = new express();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});