import HyperlinkCard from '../../shared/ui/HyperlinkCard/HyperlinkCard';
import { StyledCenteredDiv } from './Home.styled';

function Home() {
  return (
    <StyledCenteredDiv>
      <HyperlinkCard href="/people" color="palegreen">
        People
      </HyperlinkCard>
      <HyperlinkCard href="/favorites" color="lightskyblue">
        Favorites
      </HyperlinkCard>
    </StyledCenteredDiv>
  );
}

export default Home;
