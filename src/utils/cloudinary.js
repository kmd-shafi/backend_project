import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // file system

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    // upload
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    //file uploded sucessfully
    console.log("file uploded sucessfully on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath); // remove the local file uploaded failed
  }
};
export { uploadOnCloudinary };
