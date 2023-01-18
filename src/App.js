import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/hotels" element={<List></List>} />
          <Route path="/hotels/:id" element={<Hotel></Hotel>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
