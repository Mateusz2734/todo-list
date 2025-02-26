import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Stack from '@mui/joy/Stack';

import useTaskStore from "../model/store";
import { TaskCard } from "../components/TaskCard";
import { Task } from "../types";

export default function TaskTodayPage() {
    const { tasks, filterTasks } = useTaskStore();
    const [todayTasks, setTodayTasks] = useState<Task[]>([]);


    useEffect(() => {
        const today = dayjs();

        setTodayTasks(filterTasks((task) => dayjs(task.dueDate).isSame(today, "day")));
    }, [filterTasks, tasks]);

    return (
        <AccordionGroup>
            <Accordion defaultExpanded>
                <AccordionSummary>TODO</AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        {
                            todayTasks.map((task) => (
                                task.status === "todo" && <TaskCard key={task.id} task={task} />
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
                            task.status === "done" && <TaskCard key={task.id} task={task} />
                        ))
                    }
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    );
}