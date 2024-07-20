import { db } from "..";
import type { Task } from "..";

interface AddTask extends Pick<Task, "content"> {}

export const createTask = async ({ content }: AddTask) => {
  try {
    const props = {
      content,
      isDone: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const id = await db.tasks.add(props);

    return { id, ...props };
  } catch (error) {
    console.error("error", error);
    return null;
  }
};

export const getTasks = async () => {
  try {
    const tasks = await db.tasks.toArray();

    return tasks;
  } catch (error) {
    return null;
  }
};

export const updateTask = async (id: string, props: AddTask) => {
  try {
    await db.tasks.update(id, props);

    return props;
  } catch (error) {
    return null;
  }
};

export const completeTask = async (id: string) => {
  try {
    await db.tasks.update(id, { isDone: true });

    return id;
  } catch (error) {
    return null;
  }
};

export const deleteTask = async (id: string) => {
  try {
    await db.tasks.delete(id);

    return id;
  } catch (error) {
    return null;
  }
};
