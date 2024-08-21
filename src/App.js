
import './App.css';
import Navbar from './components/Navbar';
import TaskCard from './components/TaskCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Navbar/> */}
      <TaskCard/>
      </header>
    </div>
  );
}

export default App;
