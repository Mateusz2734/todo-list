import styled from "styled-components";

export const ListItemContainer = styled.div`
  min-height: 15vh;
  min-width: 60vw;
  background-color: #1e1e1e;
  margin-bottom: 2rem;

  .starred {
    color: yellow;
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

export const Category = styled.span`
  display: inline-flex;
  justify-content: center;
  border-radius: 2rem;
  background-color: #bb86fc;
  padding: 0 1rem;
`;
