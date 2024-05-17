import JoyBreadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';


export function Breadcrumbs() {
    return (
        <JoyBreadcrumbs
            aria-label="breadcrumbs" size="sm"
            separator={<ChevronRightRoundedIcon />}
            sx={{ pl: 0 }}
        >
            <Link
                underline="none"
                color="neutral"
                href="/"
                aria-label="Home"
            >
                <HomeRoundedIcon />
            </Link>
            <Link
                underline="hover"
                color="neutral"
                href="/users"
                fontSize={12}
                fontWeight={500}
            >
                Users
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
                My profile
            </Typography>
        </JoyBreadcrumbs>
    );
}