import { PriorityColor } from '../types';

export const priorityColors: PriorityColor[] = [
  { name: 'High', color: 'var(--joy-palette-danger-500, #C41C1C)', priority: 'high' },
  { name: 'Medium', color: 'var(--joy-palette-warning-500, #9A5B13)', priority: 'medium' },
  { name: 'Low', color: 'var(--joy-palette-success-500, #1F7A1F)', priority: 'low' },
  { name: 'None', color: 'var(--joy-palette-neutral-500, #636B74)', priority: 'none' }
];