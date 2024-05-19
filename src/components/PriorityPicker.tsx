import { useState } from "react";
import { FormikProps } from "formik";

import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import FlagIcon from "@mui/icons-material/FlagOutlined";

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
    { name: 'High', color: 'red', priority: 'high' },
    { name: 'Medium', color: 'yellow', priority: 'medium' },
    { name: 'Low', color: 'green', priority: 'low' },
    { name: 'None', color: 'gray', priority: 'none' }
];

function displayText(id: number) {
    return id < 3 ? items[id].name : 'Priority';
}