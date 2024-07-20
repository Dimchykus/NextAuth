import CreateTaskForm from "./createTask";
import TaskList from "./taskList";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <CreateTaskForm />
      <TaskList />
    </div>
  );
};

export default Profile;
