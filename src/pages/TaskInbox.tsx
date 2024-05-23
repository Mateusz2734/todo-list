import { TaskCard } from "../components/TaskCard";
import useTaskStore from "../model/store";

export default function TaskInboxPage() {
    const { tasks } = useTaskStore();

    return (
        <>
            {tasks.map((task) => (
                task.status !== "done" && <TaskCard key={task.id} task={task} />
            ))}
        </>
    );
}