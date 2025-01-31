const cloudinary = require("cloudinary").v2;
const multer = require('multer')
cloudinary.config({
    cloud_name: 'dg1dnmlpb',
    api_key: '958491469955868',
    api_secret: "1ZDPCq1LxoWWn3Qe0PgDwNpf3k8"
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