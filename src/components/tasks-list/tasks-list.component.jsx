import items from "../../temp/listItems";

import Task from "../task/task.component";

import { TasksListContainer, Spacer } from "./tasks-list.styles";

const TasksList = () => {
  return (
    <TasksListContainer>
      <Spacer />
      {items.map((item, id) => (
        <Task key={id} {...item} />
      ))}
    </TasksListContainer>
  );
};

export default TasksList;
