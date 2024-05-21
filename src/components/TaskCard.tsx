import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';


import { Task } from '../types';
import { priorityColors } from '../model/priority';

type TaskCardProps = {
    task: Task;
    onDelete: (id: string) => void;
    onMutate: (id: string, updatedTask: Task) => void;
};

export function TaskCard({ task, onDelete, onMutate }: TaskCardProps) {
    return (
        <Sheet>
            <Radio
                variant="soft"
                color={priorityColors.find((elem) => elem.priority === task.priority)!.color}
                size="sm"
                onChange={() => {
                    const updatedTask: Task = { ...task, status: "done" };
                    onMutate(task.id, updatedTask);
                }}
            />
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
            <IconButton color="danger" variant="plain" onClick={() => onDelete(task.id)}>
                <DeleteIcon />
            </IconButton>
        </Sheet>
    );
}