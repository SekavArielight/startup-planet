const express = require("express");
const port = process.env.PORT;
const startups = require("./data/data")

const app = express();

app.get('/', (req, res) => {
    res.json(startups);
});

app.listen(port, () => console.log(`server connected on port: ${port}`));
