const express = require ("express")
const dotenv = require("dotenv")
const connectDB = require ("./config/db")
const loggerMiddleware = require("./middleware/loggerMiddleware")
const errorMiddleware = require("./middleware/errorMiddleware")
const urlRoutes = require("./routes/urlRoutes")

dotenv.config()
connectDB()
const app = express()

//BODY PARSER
app.use(express.json())

//CUSTOM MIDDLEWARE
app.use(loggerMiddleware)

//ROUTES
app.use("/", urlRoutes)

//ERROR MIDDLEWARE
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});