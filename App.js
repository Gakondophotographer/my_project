import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcomepage from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup'
import Dashboard from "./components/Dashboard";

const App = () =>{

  return(
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Welcomepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
       </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;