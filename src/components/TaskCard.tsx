import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import RadioButtonIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlined';
import RestoreIcon from '@mui/icons-material/Restore';

import useTaskStore from '../model/store';
import { HoverableIcon } from './HoverableIcon';
import { priorityColors } from '../model/priority';
import { Status, Task } from '../types';
import { DateChip } from './DateChip';

type TaskCardProps = {
    task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
    const { editTask, removeTask } = useTaskStore();

    const hoverableIconProps = task.status === "done" ? {
        DefaultIcon: RestoreIcon,
        onClick: () => {
            const updatedTask: Task = { ...task, status: Status.TODO };
            editTask(task.id, updatedTask);
        }
    } : {
        DefaultIcon: RadioButtonIcon,
        HoverIcon: CheckCircleIcon,
        color: priorityColors.find((elem) => elem.priority === task.priority)!.color,
        onClick: () => {
            const updatedTask: Task = { ...task, status: Status.DONE };
            editTask(task.id, updatedTask);
        }
    };

    return (
        <Sheet sx={{ p: 1 }}>
            <Stack direction="row" spacing={1} width="100%" height="100%" justifyContent="space-around">
                <Stack justifyContent="center">
                    <HoverableIcon
                        size="sm"
                        {...hoverableIconProps}
                    />
                </Stack>
                <Stack width="80%">
                    <Typography width="80%" noWrap level="title-sm">{task.name}</Typography>
                    <Typography width="80%" noWrap level="body-sm">{task.description}</Typography>
                    <DateChip date={task.dueDate} done={task.status === "done"} />
                </Stack>

                <Stack justifyContent="center" alignItems="flex-end">
                    <IconButton color="danger" variant="plain" onClick={() => removeTask(task.id)}>
                        <DeleteIcon />
                    </IconButton>

                </Stack>
            </Stack>
        </Sheet>
    );
}