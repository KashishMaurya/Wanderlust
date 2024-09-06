const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// to attach backend with cloudinary account
// and config it with .env credintials

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// (require cloudinary storage with name and format.)
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedformats: ["png", "jpeg", "jpg"],
  },
});

//using this in routes.listing.js
module.exports = { cloudinary, storage };
