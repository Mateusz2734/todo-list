import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Stack from '@mui/joy/Stack';

import { TaskCard } from "../components/TaskCard";
import { Task } from "../types";

export default function TaskTodayPage() {
    const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
    const [todayTasks, setTodayTasks] = useState<Task[]>([]);
    const today = dayjs();

    useEffect(() => {
        setTodayTasks(tasks.filter((task) => dayjs(task.dueDate).isSame(today, "day")));
    }, [tasks]);

    const handleDelete = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const updateTask = (taskId: string, updatedTask: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(task => (task.id === taskId ? updatedTask : task))
        );
    };

    return (
        <AccordionGroup>
            <Accordion defaultExpanded>
                <AccordionSummary>TODO</AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        {
                            todayTasks.map((task) => (
                                task.status === "todo" && <TaskCard key={task.id} task={task} onDelete={handleDelete} onMutate={updateTask} />
                            ))
                        }
                    </Stack>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>DONE</AccordionSummary>
                <AccordionDetails>
                    {
                        todayTasks.map((task) => (
                            task.status === "done" && <TaskCard key={task.id} task={task} onDelete={handleDelete} onMutate={updateTask} />
                        ))
                    }
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    );
}