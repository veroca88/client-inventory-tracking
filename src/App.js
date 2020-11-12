import './App.css';
import Navbar from './component/Navbar';
import Authentication from './component/Authentication/Signup'
import ProtectedResource from './component/Authentication/ProtectedResource'
// import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Authentication />
      <ProtectedResource />
    </div>
  );
}

export default App;
