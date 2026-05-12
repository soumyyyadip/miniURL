const Url = require("../models/Url")
const generateCode = require("../utils/generateCode")

//CREATE SHORT URL 

const createShortUrl = async (req, res, next)=>{
    try{
        const {originalUrl} = req.body;
        if(!originalUrl){
            return res.status(400).json({
                message: "original url is required"
            })
        }

        const shortCode = generateCode()
        const shortUrl = `${process.env.BASE_URL}/${shortCode}`

        const newUrl = await Url.create({
            originalUrl, shortCode, shortUrl,
        })

        res.status(201).json(newUrl)

    } catch(error){
        next(error)
    }
}


//REDIRECT TO ORIGINAL URL 

const redirectUrl = async(req, res, next) =>{
    try{
        const {code} = req.params

        const url = await Url.findOne(
            {
                shortCode: code
            }
        )

        if(!url) {
            return res.status(404).json({
                message:"404 - URL not found"
            })
        }

        url.clicks += 1;
        await url.save()

        res.redirect(url.originalUrl)

    } catch(error){
        next(error);
    }
}


//GET ALL URLs

const getAllUrls = async (req, res, next)=>{
    try{
        const urls = await Url.find()
        res.status(200).json(urls)
    }catch(error){
        next(error)
    }
}

module.exports = {
    createShortUrl,
    redirectUrl,
    getAllUrls,

}

