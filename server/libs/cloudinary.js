import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const uploadImage = async (path) => {
  return await cloudinary.uploader.upload(path, {
    folder: "posts",
  });
};

export const removeImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
export default uploadImage;
