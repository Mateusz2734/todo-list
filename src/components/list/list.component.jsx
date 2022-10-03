import ListItem from "../list-item/list-item.component";
import { ListContainer } from "./list.styles";

const List = () => {
  return (
    <ListContainer>
      <ListItem isStarred={false} />
    </ListContainer>
  );
};

export default List;
