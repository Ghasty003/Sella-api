import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../config/prisma";

export async function createUser(req: Request, res: Response) {
  const { email, username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const response = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: (<Error>error).message,
    });
  }
}

export async function Login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExist) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    const isValidPassword = await bcrypt.compare(password, userExist.password);

    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    res.status(200).json({
      success: true,
      data: userExist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: (<Error>error).message,
    });
  }
}
