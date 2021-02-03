import logo from './logo.svg';
import './App.css';
import HebCalApi from './api/HebCalApi.js'
import TimeDisplay from './components/TimeDisplay/TimeDisplay.js'
function App() {
  return (
    <div className="App">
      {navigator.geolocation ? <TimeDisplay /> : null}
    </div>
  );
}

export default App;
