const express = require("express")
const router = express.Router()

const {
    createShortUrl,
    redirectUrl,
    getAllUrls,
} = require("../controllers/urlController")

//GET ALL URLS 
router.get("/", getAllUrls)

//CREATE SHORT URL
router.post("/shorten", createShortUrl)

//REDIRECT
router.get("/:code", redirectUrl)

module.exports = router;


