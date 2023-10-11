import styled from '@emotion/styled';

export const StyledCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  background-color: white;
  border: 1px solid #e8ebf3;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.color};
  }
`;
