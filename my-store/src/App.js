import './App.css';
import SignIn from './Signin';
import SignUp from './Signup';
import BlogList from './BlogList';
import { Route, Routes,BrowserRouter } from 'react-router-dom'; 
import Navbar from './Navbar ';
import { useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false);
  const handleLogged=()=>{
    setLogged(true);
    console.log(logged);
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn isLogged={handleLogged}/>} />
          <Route path="/blogList" element={<BlogList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
