import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppErros";
import { UserRole } from "@prisma/client";
import { hash } from "bcrypt";
import { Request, Response } from "express";
import z from "zod";

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2, { message: "Nome obrigatório" }),
      email: z
        .string()
        .trim()
        .email({ message: "E-mail invalido" })
        .toLowerCase(),
      password: z
        .string()
        .min(6, { message: "A senha deve ter no mínimo 6 dígitos" }),
      role: z
        .enum([UserRole.employee, UserRole.manager])
        .default(UserRole.employee),
    });

    const { name, email, password, role } = bodySchema.parse(request.body);

    const userWithSameMail = await prisma.user.findFirst({ where: { email } });

    if (userWithSameMail) {
      throw new AppError("Ja existe um usuário cadastrado com esse email");
    }

    const hashedPassword = await hash(password, 8);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    response.status(201).json("user criado") 
  }
}

export { UsersController };
