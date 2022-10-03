import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faCircleCheck as fasCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faCircleCheck as farCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

const ListItem = ({ isStarred, isDone, category, title, body }) => {
  const [starred, setStarred] = useState(isStarred);
  const [done, setDone] = useState(isDone);
  const toggleStar = () => setStarred(!starred);
  const toggleDone = () => setDone(!done);

  const doneIconHandler = () =>
    done ? (
      <FontAwesomeIcon
        icon={fasCircleCheck}
        color="green"
        onClick={toggleDone}
        size="3x"
      />
    ) : (
      <FontAwesomeIcon icon={farCircleCheck} onClick={toggleDone} size="3x" />
    );

  const starIconHandler = () =>
    starred ? (
      <FontAwesomeIcon
        icon={fasStar}
        color="yellow"
        onClick={toggleStar}
        size="3x"
      />
    ) : (
      <FontAwesomeIcon icon={farStar} onClick={toggleStar} size="3x" />
    );

  return (
    <>
      {doneIconHandler()}
      {starIconHandler()}
    </>
  );
};

export default ListItem;
