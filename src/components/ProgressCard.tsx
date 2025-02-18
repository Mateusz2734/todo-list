import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CircularProgress from "@mui/joy/CircularProgress";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import useTaskStore from "../model/store";
import { Task } from "../types";

interface ProgressCardProps {
    done: (task: Task) => boolean;
    all: (task: Task) => boolean;
    title: string;
}
export const ProgressCard = ({ title, done: donePredicate, all: allPredicate }: ProgressCardProps) => {
    const { getCountWithFilter } = useTaskStore();

    const done = getCountWithFilter(donePredicate);
    const all = getCountWithFilter(allPredicate);

    const progress = all !== 0 ? 100 * done / all : 0;

    return (
        <Card sx={{ m: { xs: 2, sm: 4 } }}>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate value={progress} color={progress > 90 ? "success" : "primary"}>
                    {done} / {all}
                </CircularProgress>
                <Stack justifyContent="center">
                    <Typography level="h4">
                        {title}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};