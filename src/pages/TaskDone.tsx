import useTaskStore from "../model/store";
import { TaskCard } from "../components/TaskCard";

export default function TaskDonePage() {
    const { tasks } = useTaskStore();

    return (
        <>
            {
                tasks.map((task) => (
                    task.status === "done" && <TaskCard key={task.id} task={task} />
                ))
            }
        </>
    );
}