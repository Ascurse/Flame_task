import { StyledCenteredDiv, StyledDiv, StyledHeader } from './PageHeader.styled';
import PageHeaderProps from './PageHeader.types';

function PageHeader({
  leftContentSlot,
  middleContentSlot,
  rightContentSlot,
}: PageHeaderProps) {
  return (
    <StyledHeader>
      <StyledDiv>{leftContentSlot}</StyledDiv>
      <StyledCenteredDiv>{middleContentSlot}</StyledCenteredDiv>
      <StyledDiv>{rightContentSlot}</StyledDiv>
    </StyledHeader>
  );
}

export default PageHeader;
