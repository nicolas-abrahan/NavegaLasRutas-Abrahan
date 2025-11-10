import NavBar from "./components/NavBar";
import ItemListContainerHombre from "./components/ItemListContainerHombre";
import ItemListContainerMujer from "./components/ItemListContainerMujer";
import ItemListContainerNiños from "./components/ItemListContainerNiños";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import HombreDetail from "./pages/HombreDetail";
import MujerDetail from "./pages/MujerDetail";
import NiñosDetail from "./pages/NiñosDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/niños" element={<Niños />} />
        <Route path="/hombres/:id" element={<HombreDetail />} />
        <Route path="/mujeres/:id" element={<MujerDetail />} />
        <Route path="/niños/:id" element={<NiñosDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </ BrowserRouter>
  )
}

export default App
