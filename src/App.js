import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Home from "./pages/Home";
import About from "./pages/About"
import Login from './pages/Login';
import Form from "./pages/Form";
import Crud from './pages/Crud';
import Footer from './components/Footer';


function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
