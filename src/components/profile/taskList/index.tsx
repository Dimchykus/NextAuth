"use client";

import { createTask, getTasks } from "@/core/db/actions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useLiveQuery } from "dexie-react-hooks";
import { Suspense } from "react";

const TaskList = () => {
  const tasks = useLiveQuery(async () => await getTasks(), []) || [];

  return (
    <div>
      {tasks.map((task: any) => (
        <div key={task.id}>
          <div>{task.content}</div>
          <div>{task.isDone ? "done" : "not done"}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
