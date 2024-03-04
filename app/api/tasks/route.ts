import { NextRequest, NextResponse } from "next/server";
import db from "../../../utils/db";

// get request in app router for /api/tasks from prisma

export const GET = async (req: NextRequest, res: NextResponse) => {
  const tasks = await db.task.findMany();
  return Response.json(tasks);
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json();
  console.log({ data });
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ data: task });
};
