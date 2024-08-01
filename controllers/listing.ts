import type { Request, Response } from "express";
import prisma from "../config/prisma";
import { uploadSingle } from "../config/uploadFunction";

export async function create(req: Request, res: Response) {
  try {
    const uploadResult = await uploadSingle(req);

    const response = await prisma.listing.create({
      data: {
        imageUrl: uploadResult.secure_url,
        ...req.body,
      },
    });

    res.status(201).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: (<Error>error).message,
    });
  }
}
