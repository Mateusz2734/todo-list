import { useState } from 'react';
import { IconButtonProps } from '@mui/joy';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import IconButton from '@mui/joy/IconButton';

interface CustomIconButtonProps extends IconButtonProps {
    DefaultIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    HoverIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

export function HoverableIcon({ DefaultIcon, HoverIcon, ...props }: CustomIconButtonProps) {
    const [hover, setHover] = useState(false);

    return (
        <IconButton
            {...props}
            sx={{ p: 0, minWidth: 0, minHeight: 0, "&:hover": { backgroundColor: "transparent" } }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <DefaultIcon />
            {HoverIcon && (<HoverIcon style={{ transition: transition, opacity: hover ? 1 : 0, position: 'absolute' }} />)}
        </IconButton>
    );
};