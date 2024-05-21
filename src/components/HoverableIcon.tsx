import { useState } from 'react';
import { IconButtonProps } from '@mui/joy';

import IconButton from '@mui/joy/IconButton';
import RadioButtonIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlined';

interface CustomIconButtonProps extends IconButtonProps { }

export function HoverableIcon({ ...props }: CustomIconButtonProps) {
    const [hover, setHover] = useState(false);

    return (
        <IconButton
            {...props}

            sx={{ p: 0, minWidth: 0, minHeight: 0, "&:hover": { backgroundColor: "transparent" } }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <RadioButtonIcon />
            <CheckCircleIcon style={{ transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out', opacity: hover ? 1 : 0, position: 'absolute' }} />
        </IconButton>
    );
};