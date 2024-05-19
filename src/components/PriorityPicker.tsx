import { useState } from "react";
import { FormikProps } from "formik";

import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import FlagIcon from "@mui/icons-material/FlagRounded";

import { PartialTask } from "../types";
import { priorityColors } from "../model/priority";

type PriorityPickerProps = {
    open: boolean;
    handleOpenChange: (_: React.SyntheticEvent | null, isOpen: boolean) => void;
    handleChange: FormikProps<PartialTask>["handleChange"];
};

export function PriorityPicker({ open, handleOpenChange, handleChange }: PriorityPickerProps) {
    const [currId, setCurrId] = useState(3);

    const createHandleClose = (index: number) => () => {
        handleChange({ target: { name: "priority", value: priorityColors[index].priority } });
        setCurrId(index);
    };

    return (
        <Dropdown open={open} onOpenChange={handleOpenChange}>
            <MenuButton
                sx={{ p: 0.5, fontWeight: "sm", fontSize: "xs" }}
                size="sm"
                startDecorator={<FlagIcon htmlColor={priorityColors[currId].color} />}
            >
                {displayText(currId)}
            </MenuButton>
            <Menu sx={{ zIndex: 100000 }}>
                {priorityColors.map((item, index) => (
                    <MenuItem key={index} onClick={createHandleClose(index)} selected={index === currId}>
                        <FlagIcon htmlColor={item.color} />
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
}

function displayText(id: number) {
    return id < 3 ? priorityColors[id].name : 'Priority';
}