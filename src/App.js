import './App.css';
import Router from './router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster position='top-right'/>
     <Router/>
    </div>
  );
}

export default App;
