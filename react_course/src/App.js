import logo from './logo.svg';
import './App.css';
import SimpsonsComponent from "./components/SimpsonsComponent";
import RickAndMortyComponent from "./components/RickAndMortyComponent";

function App() {
  return (
      <>
          <h2> Simpsons components</h2>
          <div className={'SimpsonsComponents'}>
              <SimpsonsComponent person/>
          </div>
          <h2>Rick And Morty components</h2>
          <div className={'RickAndMortyComponents'}>
              <RickAndMortyComponent person/>
          </div>

      </>
  );
}

export default App;
