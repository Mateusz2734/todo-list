import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';

import { ColorSchemeToggle } from './ColorSchemeToggle';
import { TaskAdder } from './TaskAdder';

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <TaskAdder modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <Sheet
                className="Sidebar"
                sx={{
                    position: { xs: 'fixed', md: 'sticky' },
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                        md: 'none',
                    },
                    transition: 'transform 0.4s, width 0.4s',
                    zIndex: 10000,
                    height: '100dvh',
                    width: 'var(--Sidebar-width)',
                    top: 0,
                    p: 2,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRight: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <GlobalStyles
                    styles={(theme) => ({
                        ':root': {
                            '--Sidebar-width': '220px',
                            [theme.breakpoints.up('lg')]: {
                                '--Sidebar-width': '240px',
                            },
                        },
                    })}
                />
                <Box
                    className="Sidebar-overlay"
                    sx={{
                        position: 'fixed',
                        zIndex: 9998,
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        opacity: 'var(--SideNavigation-slideIn)',
                        backgroundColor: 'var(--joy-palette-background-backdrop)',
                        transition: 'opacity 0.4s',
                        transform: {
                            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                            lg: 'translateX(-100%)',
                        },
                    }}
                    onClick={() => closeSidebar()}
                />
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Typography level="title-lg">TODO List</Typography>
                    <ColorSchemeToggle sx={{ ml: 'auto' }} />
                </Box>
                <Box
                    sx={{
                        minHeight: 0,
                        overflow: 'hidden auto',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        [`& .${listItemButtonClasses.root}`]: {
                            gap: 1.5,
                        },
                    }}
                >
                    <List
                        size="sm"
                        sx={{
                            gap: 1,
                            '--List-nestedInsetStart': '30px',
                            '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        }}
                    >
                        <IconItem
                            icon={<AddCircleOutlineOutlinedIcon />}
                            text="Add task"
                            title
                            onClick={() => setModalOpen(!modalOpen)}
                        />
                        <IconItem
                            icon={<HomeRoundedIcon />}
                            text="Home"
                            onClick={() => navigate("/")}
                            selected={location.pathname === "/"}
                            title
                        />
                        <ListItem nested>
                            <Toggler
                                defaultExpanded
                                renderToggle={({ open, setOpen }) => (
                                    <ListItemButton onClick={() => setOpen(!open)} selected={location.pathname === "/tasks"}>
                                        <AssignmentRoundedIcon />
                                        <ListItemContent>
                                            <Typography level="title-sm">Tasks</Typography>
                                        </ListItemContent>
                                        <KeyboardArrowDownIcon
                                            sx={{ transform: open ? 'rotate(180deg)' : 'none' }}
                                        />
                                    </ListItemButton>
                                )}
                            >
                                <List >
                                    <IconItem
                                        icon={<FormatListBulletedRoundedIcon />}
                                        text="All"
                                        onClick={() => navigate("/tasks/all")}
                                        selected={location.pathname === "/tasks/all"}
                                    />
                                    <IconItem
                                        icon={<CalendarTodayOutlinedIcon />}
                                        text="Today"
                                        onClick={() => navigate("/tasks/today")}
                                        selected={location.pathname === "/tasks/today"}
                                    />
                                    <IconItem
                                        icon={<QueryBuilderRoundedIcon />}
                                        text="In progress"
                                        onClick={() => navigate("/tasks/in_progress")}
                                        selected={location.pathname === "/tasks/in_progress"}
                                    />
                                    <IconItem
                                        icon={<CheckCircleOutlineRoundedIcon />}
                                        text="Done"
                                        onClick={() => navigate("/tasks/done")}
                                        selected={location.pathname === "/tasks/done"}
                                    />
                                </List>
                            </Toggler>
                        </ListItem>
                    </List>
                    <List
                        size="sm"
                        sx={{
                            mt: 'auto',
                            flexGrow: 0,
                            '--ListItem-radius': (theme) => theme.vars.radius.sm,
                            '--List-gap': '8px',
                        }}
                    >
                        <IconItem
                            icon={<SettingsRoundedIcon />}
                            text="Settings"
                            onClick={() => navigate("/settings")}
                            selected={location.pathname === "/settings"}
                        />
                    </List>
                </Box>
            </Sheet>
        </>
    );
}

function Toggler({
    defaultExpanded = false,
    renderToggle,
    children,
}: {
    defaultExpanded?: boolean;
    children: React.ReactNode;
    renderToggle: (params: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => React.ReactNode;
}) {
    const [open, setOpen] = useState(defaultExpanded);
    return (
        <>
            {renderToggle({ open, setOpen })}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: '0.2s ease',
                    '& > *': {
                        overflow: 'hidden',
                    },
                }}
            >
                {children}
            </Box>
        </>
    );
};

type IconItemProps = {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
    selected?: boolean;
    title?: boolean;
};

function IconItem({ icon, text, onClick, title, selected }: IconItemProps) {
    return (
        <ListItem>
            <ListItemButton selected={selected} onClick={onClick}>
                {icon}
                {title ? text : <Typography level="title-sm">{text}</Typography>}
            </ListItemButton>
        </ListItem>
    );
}

function openSidebar() {
    if (typeof window !== 'undefined') {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
    }
}

function closeSidebar() {
    if (typeof window !== 'undefined') {
        document.documentElement.style.removeProperty('--SideNavigation-slideIn');
        document.body.style.removeProperty('overflow');
    }
}

export function toggleSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-slideIn');
        if (slideIn) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
}