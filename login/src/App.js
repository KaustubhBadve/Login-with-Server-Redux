import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import { RequireAuth } from './HOF/Authcontext';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<RequireAuth><Feed/></RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
