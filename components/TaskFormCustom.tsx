"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "creating task..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null as string | null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(
    createTaskCustom,
    initialState
  ) as any;

  useEffect(() => {
    if (state.message == "error") {
      toast.error("Error creating task");
      return;
    }
    if (state.message == "success") {
      toast.success("Task created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null}
       */}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
