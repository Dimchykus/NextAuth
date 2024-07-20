"use client";

import { createTask } from "@/core/db/actions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CreateTaskForm = () => {
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      await createTask({ content: e.target.email.value });
    } catch (error: any) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-stretch gap-4">
        <TextField label="What should you do?" name="email" />
        <Button variant="contained" type="submit" className="w-32">
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
