const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes_db"

// Conect to database using mongoose
require("./config/mongoose.config")(DB);

// Middleware
app.use(express.json(), express.urlencoded({extended: true}));

// Modularize Routes
require("./routes/jokes.routes")(app);

app.listen(PORT, () => console.log(`>> Server is up on port: ${PORT}`));