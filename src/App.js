import CartContent from "./components/CartContent/CartContent.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./components/Context/DataContext.js";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
