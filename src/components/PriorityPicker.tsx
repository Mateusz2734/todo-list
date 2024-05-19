import { useState } from "react";
import { FormikProps } from "formik";

import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import FlagIcon from "@mui/icons-material/FlagRounded";

import { PartialTask, Priority } from "../types";

type PriorityPickerProps = {
    open: boolean;
    handleOpenChange: (_: React.SyntheticEvent | null, isOpen: boolean) => void;
    handleChange: FormikProps<PartialTask>["handleChange"];
};

export function PriorityPicker({ open, handleOpenChange, handleChange }: PriorityPickerProps) {
    const [currId, setCurrId] = useState(3);

    const createHandleClose = (index: number) => () => {
        handleChange({ target: { name: "priority", value: items[index].priority } });
        setCurrId(index);
    };

    return (
        <Dropdown open={open} onOpenChange={handleOpenChange}>
            <MenuButton
                sx={{ p: 0.5, fontWeight: "sm", fontSize: "xs" }}
                size="sm"
                startDecorator={<FlagIcon htmlColor={items[currId].color} />}
            >
                {displayText(currId)}
            </MenuButton>
            <Menu sx={{ zIndex: 100000 }}>
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={createHandleClose(index)} selected={index === currId}>
                        <FlagIcon htmlColor={item.color} />
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
}

type Item = {
    name: string;
    color: string;
    priority: Priority;
};

const items: Item[] = [
    { name: 'High', color: 'var(--joy-palette-danger-500, #C41C1C)', priority: 'high' },
    { name: 'Medium', color: 'var(--joy-palette-warning-500, #9A5B13)', priority: 'medium' },
    { name: 'Low', color: 'var(--joy-palette-success-500, #1F7A1F)', priority: 'low' },
    { name: 'None', color: 'var(--joy-palette-neutral-500, #636B74)', priority: 'none' }
];

function displayText(id: number) {
    return id < 3 ? items[id].name : 'Priority';
}