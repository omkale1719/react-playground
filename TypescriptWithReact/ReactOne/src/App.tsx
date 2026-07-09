import './App.css';
import { ChaiCard } from './Components/ChaiCard';

function App() {
  return (
    <>
      <div>
        <h1>Hello I Am Om</h1>

        <ChaiCard
          name="Blue Diamond Mobile Shopy"
          price={90999}
        />
      </div>
    </>
  );
}

export default App;