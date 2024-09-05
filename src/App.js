import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Flex from './pages/Flex/Flex';
import Login from './pages/login/Login';
import Order from './pages/order/Order';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/flex' element={<Flex/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
