import dayjs from 'dayjs';

import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { ColorPaletteProp } from '@mui/joy/styles';

type DateChipProps = {
    date: string | undefined;
    done?: boolean;
};

export function DateChip({ date, done }: DateChipProps) {
    if (!date) {
        return undefined;
    }

    const [fmt, color] = dateDisplay(date, done);

    return (
        <Chip size="sm" color={color}>
            <Typography color={color} level="body-xs">{fmt}</Typography>
        </Chip>
    );

}

function dateDisplay(strDate: string, done: boolean | undefined): [string, ColorPaletteProp] {
    const currentDate = dayjs();
    const date = dayjs(strDate);

    if (date.isSame(currentDate.subtract(1, "day"), "day")) {
        return ["Yesterday", done ? "neutral" : "danger"];
    } else if (date.isSame(currentDate, "day")) {
        return ["Today", "success"];
    } else if (date.isSame(currentDate.add(1, "day"), "day")) {
        return ["Tomorrow", "warning"];
    } else if (date.isBefore(currentDate, "day")) {
        if (done) {
            return [date.format("D MMM"), "neutral"];
        }
        return ["Overdue", "danger"];
    } else {
        return [date.format("D MMM"), "neutral"];
    }
}