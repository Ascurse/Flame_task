import { StyledCard } from './HyperlinkCard.styled';
import HyperlinkCardProps from './HyperlinkCard.types';

function HyperlinkCard({ href, children, color }: HyperlinkCardProps) {
  return (
    <StyledCard href={href} color={color}>
      {children}
    </StyledCard>
  );
}

export default HyperlinkCard;
