import React from "react";
import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "Learn about Prisma with Next.js",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;

  return (
    <div>
      <h1 className="text-7xl">
        {tasks.map((task) => (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        ))}
      </h1>
    </div>
  );
};

export default PrismaExample;
