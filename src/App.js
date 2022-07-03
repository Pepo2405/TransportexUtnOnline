import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";



import ContactoPage from "./pages/Contacto";
import HomePage from "./pages/Homepage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/nosotros" element={<NosotrosPage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
        <Route path="/novedades" element={<NovedadesPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
