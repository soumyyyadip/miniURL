const shortid = require("shortid")
const generateCode = ()=>{
    return shortid.generate()
}

module.exports = generateCode;