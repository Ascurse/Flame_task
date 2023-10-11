import { Spin } from 'antd';

import { StyledLoadingText, StyledOverlay } from './PageSpinner.styled';
import PageSpinnerProps from './PageSpinner.types';

function PageSpinner({ text }: PageSpinnerProps) {
  return (
    <StyledOverlay>
      <Spin size="large" />
      <StyledLoadingText>{text}</StyledLoadingText>
    </StyledOverlay>
  );
}

export default PageSpinner;
