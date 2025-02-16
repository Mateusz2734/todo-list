import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import { TaskCard } from "../components/TaskCard";
import useTaskStore from "../model/store";

export default function TaskInboxPage() {
    const { tasks } = useTaskStore();

    const notDoneTasks = tasks.filter((task) => task.status !== "done");

    if (notDoneTasks.length === 0) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <img src="/empty-state.svg" alt="My SVG" width={200} height={200} />
                <Typography>You do not have any tasks to complete.</Typography>
                <Typography>Use the <Typography color="primary">Add Task</Typography> button</Typography>
            </Box>
        );
    }

    return (
        <>
            {notDoneTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </>
    );
}