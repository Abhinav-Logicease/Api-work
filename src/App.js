import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Flex from './pages/Flex/Flex';
import Login from './pages/login/Login';
import Order from './pages/order/Order';
import Product from './pages/product/Product';
import Users from './pages/users/Users';
import UserDetails from './components/userDetails/UserDetails';


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
          <Route path='/stud' element={<Product/>} />
          <Route path='/user' element={<Users/>} />
          <Route path='/user-details' element={<UserDetails/>} />
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
