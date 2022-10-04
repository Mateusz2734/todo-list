import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70vw;
  background-color: #1e1e1e;
  border-bottom: 3px solid #121212;

  .starred {
  }

  .crossed {
    text-decoration: line-through;
    color: #ffffff1a;
  }

  @media only screen and (max-width: 600px) {
    min-height: 30vh;
    min-width: 80vw;
  }
`;

export const MainContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const ParagraphContainer = styled.div``;

export const CategoryContainer = styled.div`
  width: 20%;
`;

export const ListItemHeading = styled.h2`
  margin: 0;
`;

export const ListItemBody = styled.p`
  display: block;
  margin: 0;
  padding: 0.5rem 1rem;
`;

export const Category = styled.span`
  border-radius: 2rem;
  background-color: #bb86fc;
  padding: 0 1rem;
  margin-right: 5rem;
`;

export const StyledDoneIcon = styled(FontAwesomeIcon)`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  user-select: none;
`;

export const StyledCaretIcon = styled(FontAwesomeIcon)`
  margin: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

export const StyledStarIcon = styled(FontAwesomeIcon)`
  margin: 0.5rem 0.5rem 0.5rem auto;
  cursor: pointer;
  user-select: none;
`;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
  margin: 0.5rem;
  cursor: pointer;
  user-select: none;

  :hover {
    color: red;
  }
`;
