import './App.scss';
import Counter from './components/Counter';

const App = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter max={5} counter={2}/>
      </section>
    </main>
  );
};

export default App;
