import { Priority, PriorityColor } from "../types";

export const priorityColors: PriorityColor[] = [
  {
    name: "High",
    htmlColor: "var(--joy-palette-danger-500, #C41C1C)",
    color: "danger",
    priority: Priority.HIGH,
  },
  {
    name: "Medium",
    htmlColor: "var(--joy-palette-warning-500, #9A5B13)",
    color: "warning",
    priority: Priority.MEDIUM,
  },
  {
    name: "Low",
    htmlColor: "var(--joy-palette-success-500, #1F7A1F)",
    color: "success",
    priority: Priority.LOW,
  },
  {
    name: "None",
    htmlColor: "var(--joy-palette-neutral-500, #636B74)",
    color: "neutral",
    priority: Priority.NONE,
  },
];
