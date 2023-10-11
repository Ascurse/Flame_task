import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
`;

export const StyledLoadingText = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 18px;
`;
