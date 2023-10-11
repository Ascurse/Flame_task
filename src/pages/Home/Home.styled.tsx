import styled from '@emotion/styled';

export const StyledCenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 20px;

  @media screen and (max-width: 468px) {
    flex-direction: column;
  }
`;
