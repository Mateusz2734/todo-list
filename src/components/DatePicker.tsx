import { useState } from "react";
import { FormikProps } from "formik";

import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";

import { PartialTask } from "../types";


type DatePickerProps = {
    open: boolean;
    handleOpenChange: (_: React.SyntheticEvent | null, isOpen: boolean) => void;
    values: PartialTask;
    setOpen: (_: boolean) => void;
    handleChange: FormikProps<PartialTask>["handleChange"];
};

export function DatePicker({ open, handleOpenChange, values, handleChange, setOpen }: DatePickerProps) {
    const [clicked, setClicked] = useState(false);

    return (
        <Dropdown open={open} onOpenChange={handleOpenChange}>
            <MenuButton
                sx={{ p: 0.5, fontWeight: "sm", fontSize: "xs" }}
                size="sm"
                startDecorator={<CalendarIcon />}
            >
                {clicked ? values.dueDate!.format("DD/MM/YYYY") : "Due date"}
            </MenuButton>
            <Menu sx={{ zIndex: 100000 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={values.dueDate}
                        onChange={(date) => {
                            setClicked(true);
                            handleChange({ target: { name: "dueDate", value: date } });
                            setOpen(false);
                        }}
                        disablePast
                    />
                </LocalizationProvider>
            </Menu>
        </Dropdown>
    );
}