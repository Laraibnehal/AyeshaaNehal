const cloudinary = require("cloudinary").v2;
const multer = require('multer')
cloudinary.config({
    cloud_name: 'my_cloud_name', 
    api_key: 'my_key', 
    api_secret: 'my_secret',
    // process.env.CLOUDINARY_URL
})
const storage = new multer.memoryStorage()
async function imageUploadUtil (file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type :'auto'
    })
    return result
}
const upload = multer({storage});
module.exports = {upload, imageUploadUtil}