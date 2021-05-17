const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
console.log(apiRoutes)

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public")); 
app.use(apiRoutes)
app.use(htmlRoutes); 



app.listen(PORT, () => {
    console.log("application running on post:" + PORT)
})