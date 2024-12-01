import { BrowserRouter } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
