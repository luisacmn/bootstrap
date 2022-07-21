import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Home from "./pages/Home";
import About from "./pages/About"
import LoginPage from './pages/LoginPage';
import Form from "./pages/Form";
import Crud from './pages/Crud';
import Register from './pages/Register';
import PrivatePage from './pages/PrivatePage';
import Footer from './components/Footer';


function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/private" element={<PrivatePage />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
