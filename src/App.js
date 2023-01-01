import './App.css';
import Display from './components/Display';
import Data from './components/Data';

//Returns the 2 components the Data and static Display
function App() {
  return (
    <div className="App">
      <Display />
      <Data />
    </div>
  );
}

export default App;
