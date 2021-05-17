const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(htmlRoutes); 


app.use(express.static("public")); 

app.listen(PORT, () => {
    console.log("application running on post:" + PORT)
})