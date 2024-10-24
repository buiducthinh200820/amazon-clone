
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login"
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          Đoạn comment này để sau khi bạn thêm Login component
          <Route path="/login" element={<Login />} /> 

          Route cho trang Checkout
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
