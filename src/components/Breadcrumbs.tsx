import { useLocation } from 'react-router-dom';

import JoyBreadcrumbs from '@mui/joy/Breadcrumbs';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import { sitemap } from '../model/sitemap';
import { SitemapItem } from '../types';

export function Breadcrumbs() {
    const location = useLocation();

    return (
        <JoyBreadcrumbs
            aria-label="breadcrumbs" size="sm"
            separator={<ChevronRightRoundedIcon />}
            sx={{ pl: 0 }}
        >
            {location.pathname === "/" ? <HomeRoundedIcon /> : <Link
                underline="none"
                color="primary"
                href="/"
                aria-label="Home"
            >
                <HomeRoundedIcon />
            </Link>}

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
    const paths = getBasePaths(path);
    const breadcrumbs: JSX.Element[] = [];

    paths.forEach(path => {
        const sitemapItem = sitemap.find(item => item.path === path);
        if (sitemapItem) {
            breadcrumbs.push(
                <Link
                    key={path}
                    underline="hover"
                    color="primary"
                    href={path}
                    fontSize={12}
                    fontWeight={500}
                >
                    {sitemapItem.name}
                </Link>
            );
        }
    });

    const breadLen = breadcrumbs.length;
    const pathsLen = paths.length;

    if (breadLen > 0 && pathsLen == breadLen) {
        breadcrumbs[breadLen - 1] = (
            <Typography
                key={paths[pathsLen - 1]}
                color="neutral"
                fontWeight={500}
                fontSize={12}
            >
                {breadcrumbs[breadLen - 1].props.children}
            </Typography>
        );
    }

    return breadcrumbs;
}