"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

interface Task {
  id: string;
  content: string;
  createdAt: Date;
  completed: Boolean;
}

export const getAllTasks = async (): Promise<Task[]> => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData: any) => {
  const content = formData.get("content");
  console.log(content);
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState: any, formData: any) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }
};

export const deleteTask = async (formData: any) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id: string) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};
export const editTask = async (formData: any) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
