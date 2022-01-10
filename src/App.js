import './App.css';
import Header from './components/Header';
import League from './components/League';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <section className="leagues">
        <League/>
        <League/>
        <League/>
      </section>
    </div>
  );
}

export default App;
