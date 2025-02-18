import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

export const EmptyState = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <img src="/empty-state.svg" alt="My SVG" width={200} height={200} />
        <Typography>You do not have any tasks to complete.</Typography>
        <Typography>Use the <Typography color="primary">Add Task</Typography> button</Typography>
    </Box>
);