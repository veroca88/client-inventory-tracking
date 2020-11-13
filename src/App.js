import react, {useState, useContext} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Authentication from './component/Authentication/Signup'
import ProtectedResource from './component/Authentication/ProtectedResource'
import { AuthContext } from './component/Context/AuthContext';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
}
const logout = () => {
    setLoggedIn(false);
}

const valuesOfContext = AuthContext.Provider
// const value = useContext(AuthContext)
  return (
    <AuthContext.Provider 
    value={login, logout, console.log("+++++++++++++++", valuesOfContext)}>
      <Authentication />
      <ProtectedResource />
      </AuthContext.Provider>
  );
}