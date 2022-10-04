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
  ListItemContainer,
  MainContainer,
  ParagraphContainer,
  CategoryContainer,
  Category,
  ListItemHeading,
  ListItemBody,
  StyledCaretIcon,
  StyledDoneIcon,
  StyledStarIcon,
  StyledTrashIcon,
} from "./list-item.styles";

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
    <ListItemContainer>
      <MainContainer>
        {doneIconHandler()}
        <CategoryContainer>
          <Category>{category}</Category>
        </CategoryContainer>
        <ListItemHeading
          className={`${starred ? "starred" : ""} ${done ? "crossed" : ""}`}
        >
          {title}
        </ListItemHeading>
        {starIconHandler()}
        <StyledTrashIcon icon={faTrash} />
        {caretIconHandler()}
      </MainContainer>

      <ParagraphContainer>
        {active && (
          <ListItemBody>{body ? body : "Body not specified"}</ListItemBody>
        )}
      </ParagraphContainer>
    </ListItemContainer>
  );
};

export default ListItem;
