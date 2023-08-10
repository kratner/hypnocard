import HypnoCard from './components/HypnoCard';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <HypnoCard
        name='Keith Ratner'
        title='Anti-Guru'
        phone='650-516-7281'
        email='keith.ratner@gmail.com'
       />
    </div>
  );
}

export default App;
