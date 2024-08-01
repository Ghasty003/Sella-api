import { Request } from "express";
import cloudinary from "./cloudinary";

export async function uploadSingle(req: Request) {
  try {
    const response = await cloudinary.uploader.upload(req.file?.path!);

    return response;
  } catch (error) {
    throw error;
  }
}
