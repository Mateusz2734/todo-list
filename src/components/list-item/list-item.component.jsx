import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faCircleCheck as fasCircleCheck,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faCircleCheck as farCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

import { ListItemContainer, Category } from "./list-item.styles";

const ListItem = ({ isStarred, isDone, category, title, body }) => {
  const [starred, setStarred] = useState(isStarred);
  const [done, setDone] = useState(isDone);
  const [active, setActive] = useState(false);

  const toggleStar = () => setStarred(!starred);
  const toggleDone = () => setDone(!done);
  const toggleActive = () => setActive(!active);

  const caretIconHandler = () =>
    active ? (
      <FontAwesomeIcon icon={faChevronDown} onClick={toggleActive} />
    ) : (
      <FontAwesomeIcon icon={faChevronUp} onClick={toggleActive} />
    );

  const doneIconHandler = () =>
    done ? (
      <FontAwesomeIcon
        icon={fasCircleCheck}
        color="green"
        onClick={toggleDone}
        size="2x"
      />
    ) : (
      <FontAwesomeIcon
        icon={farCircleCheck}
        color="#ffffff1a"
        onClick={toggleDone}
        size="2x"
      />
    );

  const starIconHandler = () =>
    starred ? (
      <FontAwesomeIcon
        icon={fasStar}
        color="yellow"
        onClick={toggleStar}
        size="2x"
      />
    ) : (
      <FontAwesomeIcon
        icon={farStar}
        color="#ffffff1a"
        onClick={toggleStar}
        size="2x"
      />
    );

  return (
    <ListItemContainer>
      {doneIconHandler()}
      <Category>{category}</Category>
      {caretIconHandler()}
      <h2 className={`${starred ? "starred" : ""} ${done ? "crossed" : ""}`}>
        {title}
      </h2>
      {starIconHandler()}
      {active && <p>{body}</p>}
    </ListItemContainer>
  );
};

export default ListItem;
