import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function NotFoundPage() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: -10 }}>
                Oops...
            </Typography>
            <img src="/not-found.svg" alt="My SVG" width={400} height={400} />
        </Box>
    );
}