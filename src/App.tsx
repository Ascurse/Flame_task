import { Route, Routes } from 'react-router-dom';

import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import People from './pages/People/People';
import Person from './pages/Person/Person';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<Person />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
