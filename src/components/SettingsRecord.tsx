import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

interface SettingsRecordProps {
    title: string;
    buttonText: string;
    onClick: () => void;
}

export function SettingsRecord({ title, buttonText, onClick }: SettingsRecordProps) {
    return (
        <Stack direction="row" width="100%" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography level="title-sm">{title}</Typography>
            <Button sx={{ width: { xs: "30%", md: "20%", lg: "15%" } }} variant="soft" onClick={onClick}>{buttonText}</Button>
        </Stack>
    );
}