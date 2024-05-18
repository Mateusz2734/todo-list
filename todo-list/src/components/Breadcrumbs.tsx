import { useLocation } from 'react-router-dom';

import JoyBreadcrumbs from '@mui/joy/Breadcrumbs';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import { sitemap, SitemapItem } from '../App';

export function Breadcrumbs() {
    const location = useLocation();

    return (
        <JoyBreadcrumbs
            aria-label="breadcrumbs" size="sm"
            separator={<ChevronRightRoundedIcon />}
            sx={{ pl: 0 }}
        >
            <Link
                underline="none"
                color="primary"
                href="/"
                aria-label="Home"
            >
                <HomeRoundedIcon />
            </Link>
            {getBreadcrumbs(location.pathname, sitemap)}
        </JoyBreadcrumbs>
    );
}

function getBasePaths(path: string): string[] {
    const segments = path.split('/').filter(segment => segment);
    const basePaths: string[] = [];

    segments.reduce((accumulatedPath, currentSegment) => {
        const newPath = `${accumulatedPath}/${currentSegment}`;
        basePaths.push(newPath);
        return newPath;
    }, '');

    return basePaths;
}

function getBreadcrumbs(path: string, sitemap: SitemapItem[]): JSX.Element[] {
    const basePaths = getBasePaths(path);
    const breadcrumbs: JSX.Element[] = [];

    basePaths.forEach(basePath => {
        const sitemapItem = sitemap.find(item => item.path === basePath);
        if (sitemapItem) {
            breadcrumbs.push(
                <Link
                    key={basePath}
                    underline="hover"
                    color="primary"
                    href={basePath}
                    fontSize={12}
                    fontWeight={500}
                >
                    {sitemapItem.name}
                </Link>
            );
        }
    });

    if (breadcrumbs.length > 0) {
        breadcrumbs[breadcrumbs.length - 1] = (
            <Typography
                key={basePaths[basePaths.length - 1]}
                color="neutral"
                fontWeight={500}
                fontSize={12}
            >
                {breadcrumbs[breadcrumbs.length - 1].props.children}
            </Typography>
        );
    }

    return breadcrumbs;
}