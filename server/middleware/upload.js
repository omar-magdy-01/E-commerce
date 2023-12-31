const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        allowed_formats: [ 'jpg', 'png', 'webp' ],
        transformation: [ { width: 500, height: 500, crop: 'limit' } ]
    }
});

const upload = multer({ storage: storage });
const uploadFields = upload.fields([ { name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 5 } ])



module.exports = uploadFields


