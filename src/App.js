import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Adam from "./pages/Adam";
import Al from "./pages/Al";
import Bennett from "./pages/Bennett";
import Beth from "./pages/Beth";
import Billy from "./pages/Billy";
import Chris from "./pages/Chris";
import DaveH from "./pages/DaveH";
import DaveM from "./pages/DaveM";
import DaveT from "./pages/DaveT";
import EvertonDave from "./pages/EvertonDave";
import George from "./pages/George";
import Jason from "./pages/Jason";
import Joe from "./pages/Joe";
import JoeG from "./pages/JoeG";
import JohnB from "./pages/JohnB";
import Lewis from "./pages/Lewis";
import Nick from "./pages/Nick";
import Paul from "./pages/Paul";
import Paula from "./pages/Paula";
import Rick from "./pages/Rick";
import Roy from "./pages/Roy";
import Sam from "./pages/Sam";
import Scott from "./pages/Scott";
import Springer from "./pages/Springer";
import Steve from "./pages/Steve";
import Sullivan from "./pages/Sullivan";
import Tony from "./pages/Tony";
import Wilko from "./pages/Wilko";
import Prize from "./components/Prize";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adam" element={<Adam />} />
          <Route path="/Al" element={<Al />} />
          <Route path="/Bennett" element={<Bennett />} />
          <Route path="/Beth" element={<Beth />} />
          <Route path="/Billy" element={<Billy />} />
          <Route path="/Chris" element={<Chris />} />
          <Route path="/DaveH" element={<DaveH />} />
          <Route path="/DaveM" element={<DaveM />} />
          <Route path="/DaveT" element={<DaveT />} />
          <Route path="/EvertonDave" element={<EvertonDave />} />
          <Route path="/George" element={<George />} />
          <Route path="/Jason" element={<Jason />} />
          <Route path="/Joe" element={<Joe />} />
          <Route path="/JoeG" element={<JoeG />} />
          <Route path="/JohnB" element={<JohnB />} />
          <Route path="/Lewis" element={<Lewis />} />
          <Route path="/Nick" element={<Nick />} />
          <Route path="/Paul" element={<Paul />} />
          <Route path="/Paula" element={<Paula />} />
          <Route path="/Rick" element={<Rick />} />
          <Route path="/Roy" element={<Roy />} />
          <Route path="/Sam" element={<Sam />} />
          <Route path="/Scott" element={<Scott />} />
          <Route path="/Springer" element={<Springer />} />
          <Route path="/Steve" element={<Steve />} />
          <Route path="/Sullivan" element={<Sullivan />} />
          <Route path="/Tony" element={<Tony />} />
          <Route path="/Wilko" element={<Wilko />} />
          <Route path="/Prize" element={<Prize />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
