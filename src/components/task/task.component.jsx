import { useState } from "react";
import {
  faStar as fasStar,
  faCircleCheck as fasCircleCheck,
  faChevronUp,
  faChevronDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faCircleCheck as farCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

import {
  TaskContainer,
  MainContainer,
  ParagraphContainer,
  CategoryContainer,
  Category,
  TaskHeader,
  TaskBody,
  StyledCaretIcon,
  StyledDoneIcon,
  StyledStarIcon,
  StyledTrashIcon,
} from "./task.styles";

const ListItem = ({ isStarred, isDone, category, title, body }) => {
  const [starred, setStarred] = useState(isStarred);
  const [done, setDone] = useState(isDone);
  const [active, setActive] = useState(false);

  const toggleStarred = () => setStarred(!starred);
  const toggleDone = () => setDone(!done);
  const toggleActive = () => setActive(!active);

  const caretIconHandler = () =>
    active ? (
      <StyledCaretIcon icon={faChevronDown} onClick={toggleActive} />
    ) : (
      <StyledCaretIcon icon={faChevronUp} onClick={toggleActive} />
    );

  const doneIconHandler = () =>
    done ? (
      <StyledDoneIcon
        icon={fasCircleCheck}
        color="green"
        onClick={toggleDone}
      />
    ) : (
      <StyledDoneIcon
        icon={farCircleCheck}
        color="#ffffff1a"
        onClick={toggleDone}
      />
    );

  const starIconHandler = () =>
    starred ? (
      <StyledStarIcon icon={fasStar} color="yellow" onClick={toggleStarred} />
    ) : (
      <StyledStarIcon
        icon={farStar}
        color="#ffffff1a"
        onClick={toggleStarred}
      />
    );

  return (
    <TaskContainer>
      <MainContainer>
        {doneIconHandler()}
        <CategoryContainer>
          <Category>{category}</Category>
        </CategoryContainer>
        <TaskHeader
          className={`${starred ? "starred" : ""} ${done ? "crossed" : ""}`}
        >
          {title}
        </TaskHeader>
        {starIconHandler()}
        <StyledTrashIcon icon={faTrash} />
        {caretIconHandler()}
      </MainContainer>

      <ParagraphContainer>
        {active && <TaskBody>{body ? body : "Body not specified"}</TaskBody>}
      </ParagraphContainer>
    </TaskContainer>
  );
};

export default ListItem;
