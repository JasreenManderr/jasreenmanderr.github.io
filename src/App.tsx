import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArfPage from "./pages/Arf";
import AnsPage from "./pages/Ans";
import ArAppPage from "./pages/Arapp";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import AboutPage from "./pages/About";
import ScrollToTop from "./hooks/scrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SideBar />}>
          {" "}
          {/* Add element to all pages */}
          <Route path="/" index={true} element={<Home />} />
          <Route path="arf" element={<ArfPage />} />
          <Route path="arapp" element={<ArAppPage />} />
          <Route path="ans" element={<AnsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
