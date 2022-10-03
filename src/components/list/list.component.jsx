import items from "../../temp/listItems";

import ListItem from "../list-item/list-item.component";

import { ListContainer } from "./list.styles";

const List = () => {
  return (
    <ListContainer>
      {items.map((item, id) => (
        <ListItem key={id} {...item} />
      ))}
    </ListContainer>
  );
};

export default List;
