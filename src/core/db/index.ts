import Dexie, { type EntityTable } from "dexie";

interface Task {
  id: string;
  content: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}

const db = new Dexie("Auth") as Dexie & {
  tasks: EntityTable<Task, "id">;
};

db.version(2).stores({
  tasks: "++id, content, isDone, createdAt, updatedAt",
});

export type { Task };
export { db };
