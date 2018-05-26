const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.port || 3002;
//const host = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});

