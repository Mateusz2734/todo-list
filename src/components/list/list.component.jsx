import items from "../../temp/listItems";

import ListItem from "../list-item/list-item.component";

import { ListContainer, Spacer } from "./list.styles";

const List = () => {
  return (
    <ListContainer>
      <Spacer />
      {items.map((item, id) => (
        <ListItem key={id} {...item} />
      ))}
    </ListContainer>
  );
};

export default List;
