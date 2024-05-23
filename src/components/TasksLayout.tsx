import { Outlet, useLocation } from "react-router-dom";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import { sitemap } from "../model/sitemap";

export default function TasksLayout() {
    const location = useLocation();

    return (
        <Stack width={{ lg: "60%", xs: "100%" }} spacing={2}>
            <Typography level="h2">
                {sitemap.find((item) => item.path === location.pathname)?.name}
            </Typography>
            <Outlet />
        </Stack>
    );
}