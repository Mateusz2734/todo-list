import { TaskCard } from "../components/TaskCard";
import useTaskStore from "../model/store";
import { EmptyState } from "../components/EmptyState";

export default function TaskInboxPage() {
    const { tasks } = useTaskStore();

    const notDoneTasks = tasks.filter((task) => task.status !== "done");

    if (notDoneTasks.length === 0) {
        return <EmptyState />;
    }

    return (
        <>
            {notDoneTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </>
    );
}