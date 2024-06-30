import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import "./assests/css/style.css";
import Login from "./components/login";
import Home from "./components/home";
import Service from "./components/service";
import About from "./components/about";
import Signup from "./components/signup";
import SidebarLast from "./components/sidebarlast";
import Example from "./components/hooks";
import MyForm from "./components/MyForm";
import Slider from "./components/SliderImage/Slider";
import FullviewImage from "./components/FullviewImage";
import ImageSelector from "./components/ImageSelector";
import ClickChangecolor from "./components/ClickChangecolor";
import ImageListbutton from "./components/ImageListbutton";
import Header from "./components/Topbar/Header";
import Formdata from "./components/Form/Formdata";
import Logindata from "./components/Form/Logindata";
import UnifiedExample from "./components/UnifiedExample";
import Vpp from "./components/vApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/loginone" element={<Login />} />
        <Route path="/register" element={<Formdata />} />
        <Route path="/" element={<Logindata />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sidebarlast" element={<SidebarLast />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route path="/example" element={<Example />} />
        <Route path="/myform" element={<MyForm />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/image" element={<FullviewImage />} />
        <Route path="/selector" element={<ImageSelector />} />
        <Route path="/color" element={<ClickChangecolor />} />
        <Route path="/button" element={<ImageListbutton />} />
        <Route path="/topbar" element={<Header />} />
        <Route path="/uni" element={<UnifiedExample />} />
        <Route path="/v" element={<Vpp />} />
      </Routes>
    </>
  );
}

export default App;
