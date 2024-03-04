import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import { Task } from "@prisma/client";
import Link from "next/link";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const task = (await getTask(params.id)) as Task;
  console.log({ task });

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default page;
