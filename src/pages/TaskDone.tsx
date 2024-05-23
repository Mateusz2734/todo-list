import { useLocalStorage } from "@uidotdev/usehooks";

import { TaskCard } from "../components/TaskCard";
import { Task } from "../types";

export default function TaskDonePage() {
    const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

    const handleDelete = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const updateTask = (taskId: string, updatedTask: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(task => (task.id === taskId ? updatedTask : task))
        );
    };

    return (
        <>
            {
                tasks.map((task) => (
                    task.status === "done" && <TaskCard key={task.id} task={task} onDelete={handleDelete} onMutate={updateTask} />
                ))
            }
        </>
    );
}