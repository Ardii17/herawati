// pages/api/get-images.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const { folder } = req.query;

    if (!folder) {
      return res.status(400).json({ error: "Folder parameter is required" });
    }

    const { resources } = await cloudinary.search
      .expression(`folder:"${folder}"`) // folder dinamis dari parameter
      .sort_by("public_id", "desc")
      .max_results(50)
      .execute();

    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
