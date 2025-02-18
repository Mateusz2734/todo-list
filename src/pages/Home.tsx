import dayjs from "dayjs";

import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import { ProgressCard } from "../components/ProgressCard";
import { EmptyState } from "../components/EmptyState";
import { Status } from "../types";
import useTaskStore from "../model/store";

export default function HomePage() {
    const { tasks } = useTaskStore();
    const today = dayjs().format("YYYY-MM-DD");

    if (tasks.length === 0) {
        return <EmptyState />;
    }

    return (
        <>
            <Typography level="h2" sx={{ mb: 2 }}>Your Progress</Typography>
            <Stack sx={{ flexGrow: 1, flexDirection: { xs: "column", md: "row" }, justifyContent: "center", alignItems: "center" }}>
                <ProgressCard title="Overall progress" all={() => true} done={(task) => task.status === Status.DONE} />
                <ProgressCard title="Today's progress" all={(task) => task.dueDate === today} done={(task) => task.status === Status.DONE && task.dueDate === today} />
            </Stack>
        </>
    );
}