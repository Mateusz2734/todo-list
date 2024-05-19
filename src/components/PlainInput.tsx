import Input, { InputProps } from '@mui/joy/Input';

interface PlainInputProps extends InputProps {
    placeholder: string;
}

export function PlainInput(props: PlainInputProps) {
    return (
        <Input
            {...props}
            variant="plain"
            sx={{
                "--Input-focusedThickness": 0,
                "--Input-paddingInline": 0,
            }}

            slotProps={{
                input: {
                    autoComplete: "off",
                }
            }}
        >
            {props.children}
        </Input>
    );
}

