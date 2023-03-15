import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from './Shop';
import ContactUs from './ContactUs';

import FirstPage from './FirstPage';

function App () {
  return (
  <Router>
      <nav>
        <Link to="/" className='link'>Lassilan Kukka</Link>
        <Link to="/shop" className='link'>Kauppa</Link>

        <Link to="/contact" className='link'>Yhteystiedot</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/shop" element={<Shop/>}/>

        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </Router>
  )

}

export default App;
